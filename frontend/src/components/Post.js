// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { format } from 'date-fns'
// Modules
import { fetchComments } from '../actions/comments'
// Components
import Voter from './Voter'
// Icons
import PostOpen from 'react-icons/lib/md/playlist-add'
import PostClose from 'react-icons/lib/md/cancel'
// Styles
import cl from '../styles/renderer'

class Post extends Component {
  state = {
    isExpanded: false,
  }

  toggleExpansion() {
    this.setState((prevState) => ({ isExpanded: !prevState.isExpanded }))
  }

  loadComments() {
    const parentId = this.props.postData.id
    this.props.fetchComments(parentId)
  }

  componentDidMount() {
    this.loadComments()
  }

  render() {
    const { postData, comments } = this.props
    const { isExpanded } = this.state
    const when = format(postData.timestamp, 'MMMM Do, YYYY')
    const submissionInfo = `submitted ${when} by ${postData.author} to /${postData.category}`
    const commentInfo = `${comments.length} comments`

    return (
      <div className={cl('post')}>
        <Voter voteScore={postData.voteScore}></Voter>
        <div className={cl('panel')}>
          <div className={cl('title')}>{postData.title}</div>
          <div className={cl('content')}>
            <div className={cl('expander')}>
              <button onClick={this.toggleExpansion.bind(this)}>
                {isExpanded ? <PostClose size={24}/> : <PostOpen size={24}/>}
              </button>
            </div>
            <div className={cl('info')}>
              <div>{submissionInfo}</div>
              <div>{commentInfo}</div>
            </div>
          </div>
          <div className={cl('body', { isExpanded })}>{postData.body}</div>
        </div>
      </div>
    )
  }
}

Post.propTypes = {
  postData: PropTypes.object.isRequired,
}

function mapStateToProps({ comments }, { postData }) {
  const id = postData.id
  return {
    comments: comments.filter(comment => comment.parentId === id),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchComments: (parentId) => fetchComments(dispatch, { parentId }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)