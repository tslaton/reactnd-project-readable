// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PostContent extends Component {
  render() {
    const { title, body } = this.props
    const { renderer } = this.context
    const cl = (className) => renderer.renderRule(styles[className])

    return (
      <div className={cl('content')}>
        <div>{title}</div>
        <div>{body}</div>
      </div>
    )
  }
}

PostContent.contextTypes = { renderer: PropTypes.object.isRequired }

PostContent.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default PostContent

const styles = {
  content: () => ({
    alignSelf: 'center',
  }),
}
