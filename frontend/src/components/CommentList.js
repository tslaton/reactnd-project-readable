// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Components
import Comment from './Comment'
import ActionBar from './ActionBar'

class CommentList extends Component {
  render() {
    const { parentId, comments } = this.props

    return (
      <div>
        <ActionBar operand="comment" parentId={parentId}/>
        {comments.map((comment) =>
          <Comment key={`comment-${comment.id}`} commentData={comment}/>
        )}
      </div>
    )
  }
}

CommentList.propTypes = {
  parentId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
}

export default CommentList