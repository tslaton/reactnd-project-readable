// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Components
import EditModal from './EditModal'
// Styles
import scopedStyles from '../styles/renderer'
const cl = scopedStyles('action-bar')

class ActionBar extends Component {
  state = {
    createPostModalOpen: false,
  }

  showCreatePostModal() {
    this.setState(() => ({ createPostModalOpen: true }))
  }

  hideCreatePostModal() {
    this.setState(() => ({ createPostModalOpen: false }))
  }

  render() {
    const { category } = this.props
    const { createPostModalOpen } = this.state

    return (
      <div className={cl('action-bar')}>
        <button className={cl('add-post')} onClick={this.showCreatePostModal.bind(this)}>Create a New Post</button>
        <EditModal mode="create" category={category} isOpen={createPostModalOpen} onRequestClose={this.hideCreatePostModal.bind(this)}/>
      </div>
    )
  }
}


ActionBar.propTypes = {
  category: PropTypes.string.isRequired,
}

export default ActionBar