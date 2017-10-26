// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Modal from 'react-modal'
// Modules
import { capitalize } from '../utils'
// Actions
import { createPost, saveEditedPost } from '../actions/posts'
import { postComment, saveEditedComment } from '../actions/comments'
// Components
import Select from './Select'
// Styles
import scopedStyles from '../styles/renderer'
const cl = scopedStyles('edit-modal')

const categories = [
  { name: 'react', value: 'react' },
  { name: 'redux', value: 'redux' },
  { name: 'udacity', value: 'udacity' },
]

class EditModal extends Component {
  state = {
    title: '',
    author: '',
    body: '',
    category: '',
  }

  updateState(key, event) {
    const value = event.target.value
    this.setState(() => ({ [key]: value }))
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      mode,
      operand,
      data,
      parentId,
      createPost,
      saveEditedPost,
      postComment,
      saveEditedComment,
      onRequestClose
    } = this.props
    const blob = {
      author: this.state.author || '<anonymous>',
      body: this.state.body || '<empty>',
    }
    const post = {
      ...blob,
      title: this.state.title || '<untitled>',
      category: this.state.category,
    }
    const comment = {
      ...blob,
      parentId,
    }
    switch(mode) {
      case 'edit':
        if (operand === 'post') {
          post.id = data.id
          saveEditedPost(post)
        }
        else {
          comment.id = data.id
          saveEditedComment(comment)
        }
        break
      default:
        operand === 'post' ? createPost(post) : postComment(comment)
    }
    onRequestClose()
  }

  onAfterOpen() {
    const { mode, category } = this.props
    const data = this.props.data || {}
    const defaultState = {
      title: data.title || '',
      author: data.author || '',
      body: data.body || '',
      category: mode === 'edit'
        ? data.category
        : category === 'all'
          ? categories[0].name
          : category,
    }
    this.setState(() => defaultState)
  }

  render() {
    const { mode, operand, isOpen, onRequestClose } = this.props
    const action = operand === 'comment' && mode === 'create' ? 'add' : mode

    return (
      <Modal
        contentLabel="Modal"
        isOpen={isOpen}
        onAfterOpen={this.onAfterOpen.bind(this)}
        onRequestClose={onRequestClose}
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)'},
          content: {
            position: 'fixed',
            top: '50%',
            right: 'auto',
            bottom: 'auto',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            borderRadius: '10px',
            width: '500px',
          }
        }}>
        <h1 className={cl('header')}>{`${capitalize(action)} ${capitalize(operand)}`}</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          {operand === 'post' &&
            <section>
              <Select
                id="category-select"
                label="Category:"
                options={categories}
                value={this.state.category}
                onChange={this.updateState.bind(this, 'category')}
                disabled={this.props.category !== 'all'}
              />
            </section>
          }
          <section className={cl('title-author')}>
            {operand === 'post' &&
              <div className={cl('title')}>
                <label htmlFor="title-input">Title:&nbsp;</label>
                <input
                  id="title-input"
                  type="text"
                  value={this.state.title}
                  placeholder="Title"
                  onChange={this.updateState.bind(this, 'title')}
                />
              </div>
            }
            <div className={cl('author')}>
              {operand === 'post' &&
                <label htmlFor="author-input">&nbsp;&nbsp;Author:&nbsp;</label>
              }
              {operand === 'comment' &&
                <label htmlFor="author-input">Author:&nbsp;</label>
              }
              <input
                id="author-input"
                type="text"
                value={this.state.author}
                placeholder="Author"
                onChange={this.updateState.bind(this, 'author')}
                disabled={mode !== 'create'}
              />
            </div>
          </section>
          <section>
            <textarea
              rows="6"
              cols="80"
              value={this.state.body}
              onChange={this.updateState.bind(this, 'body')}
            ></textarea>
          </section>
          <section>
            <input type="submit" value={mode === 'create' ? 'Post' : 'Save'}/>
          </section>
        </form>
      </Modal>
    )
  }
}

EditModal.propTypes = {
  mode: PropTypes.string.isRequired,
  operand: PropTypes.string.isRequired,
  data: PropTypes.object,
  category: PropTypes.string,
  parentId: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
}

export default connect(null, { createPost, saveEditedPost, postComment, saveEditedComment })(EditModal)
