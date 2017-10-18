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
  upVote() {
    const { vote, parentType, parentID } = this.props
    vote(parentType, parentID, 'upVote')
  }

  downVote() {
    const { vote, parentType, parentID } = this.props
    vote(parentType, parentID, 'downVote')
  }

  render() {
    const { voteScore } = this.props

    return (
      <div className={cl('voter', { voteScore })}>
        <GoArrowUp className={cl('arrow-up')} size={30} onClick={this.upVote.bind(this)}/>
        {voteScore !== undefined && <div className={cl('vote-score')}>{voteScore}</div>}
        <GoArrowDown className={cl('arrow-down')} size={30} onClick={this.downVote.bind(this)}/>
      </div>
    )
  }
}

Voter.propTypes = {
  parentType: PropTypes.string.isRequired,
  parentID: PropTypes.string.isRequired,
  voteScore: PropTypes.number,
}

function mapDispatchToProps(dispatch) {
  return {
    vote: (targetType, id, vote) => {
      if (targetType === 'post') {
        voteOnPost(dispatch, id, vote)
      }
      else {
        voteOnComment(dispatch, id, vote)
      }
    },
  }
}

export default connect(null, mapDispatchToProps)(Voter)