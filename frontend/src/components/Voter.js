// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Icons
import GoArrowUp from 'react-icons/lib/go/arrow-up'
import GoArrowDown from 'react-icons/lib/go/arrow-down'
// Styles
import cl from '../styles/renderer'

class Voter extends Component {
  render() {
    const { voteScore } = this.props

    return (
      <div className={cl('voter')}>
        <GoArrowUp size={30}/>
        {voteScore !== undefined && <div className={cl('vote-score')}>{voteScore}</div>}
        <GoArrowDown size={30}/>
      </div>
    )
  }
}

Voter.propTypes = {
  voteScore: PropTypes.number,
}

export default Voter