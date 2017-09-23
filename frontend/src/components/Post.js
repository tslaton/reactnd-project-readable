// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Components
import Voter from './Voter'

class Post extends Component {
  render() {
    const postData = this.props.postData
    const { renderer } = this.context
    const fela = renderer.renderRule

    return (
      <div className={fela(styles.post)}>
        <div className={fela(styles.voterContainer)}>
          <Voter voteScore={postData.voteScore}></Voter>
        </div>
        <div className={fela(styles.contentContainer)}>
          <div>{postData.title}</div>
          <div>{postData.body}</div>
        </div>
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
    gridTemplateColumns: '20px auto',
  }),
  voterContainer: () => ({
    gridColumnStart: 1,
    gridColumnEnd: 2,
  }),
  contentContainer: () => ({
    gridColumnStart: 2,
    gridColumnEnd: 3,
  })
}