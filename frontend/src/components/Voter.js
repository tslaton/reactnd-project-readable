// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// Actions
import { voteOnPost } from '../actions/posts'
import { voteOnComment } from '../actions/comments'
// Icons
import GoArrowUp from 'react-icons/lib/go/arrow-up'
import GoArrowDown from 'react-icons/lib/go/arrow-down'
// Styles
import scopedStyles from '../styles/renderer'
const cl = scopedStyles('voter')

class Voter extends Component {
  render() {
    const { voteScore, upVote, downVote } = this.props

    return (
      <div className={cl('voter', { voteScore })}>
        <GoArrowUp className={cl('arrow-up')} size={30} onClick={upVote}/>
        {voteScore !== undefined && <div className={cl('vote-score')}>{voteScore}</div>}
        <GoArrowDown className={cl('arrow-down')} size={30} onClick={downVote}/>
      </div>
    )
  }
}

Voter.propTypes = {
  parentType: PropTypes.string.isRequired,
  parentID: PropTypes.string.isRequired,
  voteScore: PropTypes.number,
}

function mapDispatchToProps(dispatch, { parentType, parentID }) {
  return {
    upVote: () => dispatch(parentType === 'post'
      ? voteOnPost(parentID, 'upVote')
      : voteOnComment(parentID, 'upVote')),
    downVote: () => dispatch(parentType === 'post'
      ? voteOnPost(parentID, 'downVote')
      : voteOnComment(parentID, 'downVote')),
  }
}

export default connect(null, mapDispatchToProps)(Voter)