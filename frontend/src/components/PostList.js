import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

class PostList extends Component {
  render() {
    const { posts } = this.props

    return (
      <div className="post-list">
        {posts.map((post) =>
          <Post className="post" key={`post-${post.id}`} postData={post}/>
        )}
      </div>
    )
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default PostList