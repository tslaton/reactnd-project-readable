// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Components
import Post from './Post'
import ActionBar from './ActionBar'

class PostList extends Component {
  render() {
    const { category, posts } = this.props

    return (
      <div>
        <ActionBar operand="post" category={category}/>
        {posts.map((post) =>
          <Post key={`post-${post.id}`} postData={post} viewMode="list"/>
        )}
      </div>
    )
  }
}

PostList.propTypes = {
  category: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
}

export default PostList