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
    editModalOpen: false,
  }

  showEditModal() {
    this.setState(() => ({ editModalOpen: true }))
  }

  hideEditModal() {
    this.setState(() => ({ editModalOpen: false }))
  }

  render() {
    const { operand, category, parentId } = this.props
    const { editModalOpen } = this.state

    return (
      <div className={cl('action-bar')}>
        <button className={cl('add-post')} onClick={this.showEditModal.bind(this)}>
          {operand === 'post' ? 'Create a New Post' : 'Comment'}
        </button>
        <EditModal
          mode="create"
          operand={operand}
          category={category}
          parentId={parentId}
          isOpen={editModalOpen}
          onRequestClose={this.hideEditModal.bind(this)}
        />
      </div>
    )
  }
}


ActionBar.propTypes = {
  operand: PropTypes.string.isRequired,
  category: PropTypes.string,
  parentId: PropTypes.string,
}

export default ActionBar