// Libraries
import React, { Component } from 'react'
import Modal from 'react-modal'
// Actions
import { showPostsModal } from '../actions/posts'
// Styles
import scopedStyles from '../styles/renderer'
const cl = scopedStyles('action-bar')

class ActionBar extends Component {
  state = {
    createPostModalOpen: false,
  }

  showPostModal() {
    this.setState(() => ({ createPostModalOpen: true }))
  }

  hidePostModal() {
    this.setState(() => ({ createPostModalOpen: false }))
  }

  render() {
    const { createPostModalOpen } = this.state

    return (
      <div className={cl('action-bar')}>
        <button className={cl('add-post')} onClick={this.showPostModal.bind(this)}>Create a New Post</button>
        <Modal
          isOpen={createPostModalOpen}
          onRequestClose={this.hidePostModal.bind(this)}
          contentLabel="Modal"
        >
          <h1>Create a New Post</h1>
          <div>
            <label htmlFor="author-form">Author</label>
            <input type="text" id="author-form" placeholder="Author"/>
          </div>
          <div>
            <label htmlFor="title-form">Title</label>
            <input type="text" id="title-form" placeholder="Title"/>
          </div>
          <div>
            <label htmlFor="body-form">Body</label>
            <textarea rows="4" cols="50"></textarea>
          </div>
        </Modal>
      </div>
    )
  }
}

export default ActionBar