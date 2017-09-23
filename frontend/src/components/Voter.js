// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Icons
import GoArrowUp from 'react-icons/lib/go/arrow-up'
import GoArrowDown from 'react-icons/lib/go/arrow-down'

class Voter extends Component {
  render() {
    const { voteScore } = this.props
    const { renderer } = this.context
    const fela = renderer.renderRule

    return (
      <div>
        <GoArrowUp/>
        <div>{voteScore}</div>
        <GoArrowDown/>
      </div>
    )
  }
}

Voter.contextTypes = { renderer: PropTypes.object.isRequired }

Voter.propTypes = {
  voteScore: PropTypes.number.isRequired,
}

export default Voter

const styles = {

}