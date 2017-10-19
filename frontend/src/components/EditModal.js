// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Modal from 'react-modal'
// Modules
import { capitalize } from '../utils'
// Actions
import { createPost, saveEditedPost } from '../actions/posts'
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
  data = this.props.data || {}

  state = {
    title: this.data.title || '',
    author: this.data.author || '',
    body: this.data.body || '',
    category: this.props.mode === 'edit'
      ? this.data.category
      : this.props.category === 'all'
        ? categories[0].name
        : this.props.category,
  }

  updateState(key, event) {
    const value = event.target.value
    this.setState(() => ({ [key]: value }))
  }

  handleSubmit(event) {
    event.preventDefault();
    const { mode, data, createPost, saveEditedPost, onRequestClose } = this.props
    const post = { ...this.state }
    post.title = post.title || '<untitled>'
    post.author = post.author || '<anonymous>'
    post.body = post.body || '<empty>'
    switch(mode) {
      case 'edit':
        post.id = data.id
        saveEditedPost(post)
        break
      default:
        createPost(post)
    }
    onRequestClose()
  }

  render() {
    const { mode, isOpen, onRequestClose } = this.props

    return (
      <Modal
        contentLabel="Modal"
        isOpen={isOpen}
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
        <h1 className={cl('header')}>{`${capitalize(mode)} Post`}</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
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
          <section className={cl('title-author')}>
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
            <div className={cl('author')}>
              <label htmlFor="author-input">&nbsp;&nbsp;Author:&nbsp;</label>
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
  data: PropTypes.object,
  category: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
}

function mapDispatchToProps(dispatch) {
  return {
    createPost: (post) => createPost(dispatch, post),
    saveEditedPost: (editedPost) => saveEditedPost(dispatch, editedPost),
  }
}

export default connect(null, mapDispatchToProps)(EditModal)
