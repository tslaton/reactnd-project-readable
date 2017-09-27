import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

class CommentList extends Component {
  render() {
    const { comments } = this.props

    return (
      <div>
        {comments.map((comment) =>
          <Comment key={`comment-${comment.id}`} commentData={comment}/>
        )}
      </div>
    )
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
}

export default CommentList