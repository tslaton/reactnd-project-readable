// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// Modules
import { formatTime } from '../utils'
// Components
import Voter from './Voter'
import EditModal from './EditModal'
// Actions
import { deleteComment } from '../actions/comments'
// Styles
import scopedStyles from '../styles/renderer'
const cl = scopedStyles('comment')

class Comment extends Component {
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
    const { commentData, deleteSelf } = this.props
    const { editModalOpen } = this.state

    return (
      <div className={cl('comment')}>
        <Voter parentType="comment" parentID={commentData.id}></Voter>
        <div className={cl('panel')}>
          <div className={cl('info-bar')}>
            <div>
              <span>{commentData.author}</span>
              <b>&nbsp;<span>{commentData.voteScore}</span>&nbsp;points&nbsp;</b>
              <span>{formatTime(commentData.timestamp)}</span>
            </div>
            <div className={cl('actions')}>
              <button onClick={this.showEditModal.bind(this)}>Edit</button>
              <button onClick={deleteSelf}>Delete</button>
            </div>
          </div>
          <div>{commentData.body}</div>
        </div>
        <EditModal
          operand="comment"
          mode="edit"
          data={commentData}
          parentId={commentData.parentId}
          isOpen={editModalOpen}
          onRequestClose={this.hideEditModal.bind(this)}
         />
      </div>
    )
  }
}

Comment.propTypes = {
  commentData: PropTypes.object.isRequired,
}

function mapDispatchToProps(dispatch, { commentData }) {
  const id = commentData.id
  return {
    deleteSelf: () => dispatch(deleteComment(id)),
  }
}

export default connect(null, mapDispatchToProps)(Comment)