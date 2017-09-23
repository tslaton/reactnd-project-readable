// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Styles
import cl from '../styles/renderer'

class PostContent extends Component {
  render() {
    const { title, body } = this.props

    return (
      <div className={cl('content')}>
        <div>{title}</div>
        <div>{body}</div>
      </div>
    )
  }
}

PostContent.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default PostContent