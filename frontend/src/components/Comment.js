// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Styles
import cl from '../styles/renderer'
// id	String	Unique identifier
// parentId	String	id of the parent post
// timestamp	Integer	Time created - default data tracks this in Unix time. You can use Date.now() to get this number
// body	String	Comment body
// author	String	Comment author
// voteScore	Integer	Net votes the comment has received (default: 1)
// deleted	Boolean	Flag if comment has been 'deleted' (inaccessible by the front end), (default: false)
// parentDeleted	Boolean	Flag for when the the parent post was deleted, but the comment itself was not.
class Comment extends Component {
  render() {
    const commentData = this.props.commentData

    return (
      <div className={cl('comment')}>

      </div>
    )
  }
}

Comment.propTypes = {
  commentData: PropTypes.object.isRequired,
}

export default Comment