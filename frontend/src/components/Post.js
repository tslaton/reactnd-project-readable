// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Components
import Voter from './Voter'
import PostContent from './PostContent'
// Styles
import cl from '../styles/renderer'

class Post extends Component {
  render() {
    const postData = this.props.postData

    return (
      <div className={cl('post')}>
        <Voter voteScore={postData.voteScore}></Voter>
        <PostContent title={postData.title} body={postData.body}></PostContent>
      </div>
    )
  }
}

Post.propTypes = {
  postData: PropTypes.object.isRequired,
}

export default Post