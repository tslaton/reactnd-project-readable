// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import * as _ from 'lodash'
// Modules
import { formatTime } from '../utils'
// Actions
import { fetchComments } from '../actions/comments'
// Components
import Voter from './Voter'
import CommentList from './CommentList'
// Icons
import PostOpen from 'react-icons/lib/md/playlist-add'
import PostClose from 'react-icons/lib/md/cancel'
// Styles
import scopedStyles from '../styles/renderer'
const cl = scopedStyles('post')

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
    const { postData, viewMode, comments } = this.props
    const { isExpanded } = this.state
    const when = formatTime(postData.timestamp)
    const submissionInfo = `submitted ${when} by ${postData.author} to /${postData.category}`
    const commentInfo = `${comments.length} comments`

    return (
      <div>
        <div className={cl('post')}>
          <Voter parentType="post" parentID={postData.id} voteScore={postData.voteScore}></Voter>
          <div className={cl('panel')}>
            <div className={cl('title-bar')}>
              <NavLink className={cl('title')} exact to={`/${postData.category}/${postData.id}`}>{postData.title}</NavLink>
              <div className={cl('actions')}>
                <a href="#">Edit</a>
                <a href="#">Delete</a>
              </div>
            </div>
            <div className={cl('content', { viewMode })}>
              <div className={cl('expander', { viewMode })}>
                <button onClick={this.toggleExpansion.bind(this)}>
                  {isExpanded ? <PostClose size={24}/> : <PostOpen size={24}/>}
                </button>
              </div>
              <div className={cl('info')}>
                <div>{submissionInfo}</div>
                <div>{commentInfo}</div>
              </div>
            </div>
            <div className={cl('body', { isExpanded, viewMode })}>{postData.body}</div>
          </div>
        </div>
        {viewMode === 'detail' && <CommentList comments={comments}/>}
      </div>
    )
  }
}

Post.propTypes = {
  postData: PropTypes.object.isRequired,
  viewMode: PropTypes.string.isRequired,
}

function mapStateToProps({ comments }, { postData }) {
  const id = postData.id
  return {
    comments: _.orderBy(comments.filter(comment => comment.parentId === id), ['voteScore'], ['desc']),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchComments: (parentId) => fetchComments(dispatch, { parentId }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)