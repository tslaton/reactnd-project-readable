// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Components
import Voter from './Voter'
import PostContent from './PostContent'

class Post extends Component {
  render() {
    const postData = this.props.postData
    const { renderer } = this.context
    const cl = (className) => renderer.renderRule(styles[className])

    return (
      <div className={cl('post')}>
        <Voter voteScore={postData.voteScore}></Voter>
        <PostContent title={postData.title} body={postData.body}></PostContent>
      </div>
    )
  }
}

Post.contextTypes = { renderer: PropTypes.object.isRequired }

Post.propTypes = {
  postData: PropTypes.object.isRequired,
}

export default Post

const styles = {
  post: () => ({
    display: 'grid',
    gridTemplateColumns: '40px 1fr',
  }),
}