// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Modules
import { formatTime } from '../utils'
// Components
import Voter from './Voter'
// Styles
import scopedStyles from '../styles/renderer'
const cl = scopedStyles('comment')

class Comment extends Component {
  render() {
    const commentData = this.props.commentData

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
              <a href="#">Edit</a>
              <a href="#">Delete</a>
            </div>
          </div>
          <div>{commentData.body}</div>
        </div>
      </div>
    )
  }
}

Comment.propTypes = {
  commentData: PropTypes.object.isRequired,
}

export default Comment