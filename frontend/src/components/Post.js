import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Post extends Component {
  render() {
    const postData = this.props.postData

    return (
      <div className="post">
        <div className="title">{postData.title}</div>
        <div className="body">{postData.body}</div>
      </div>
    )
  }
}

Post.propTypes = {
  postData: PropTypes.object.isRequired,
}

export default Post