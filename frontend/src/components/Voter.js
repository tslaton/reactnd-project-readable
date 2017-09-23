// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import combineRules from 'fela'
// Icons
import GoArrowUp from 'react-icons/lib/go/arrow-up'
import GoArrowDown from 'react-icons/lib/go/arrow-down'

class Voter extends Component {
  render() {
    const { voteScore } = this.props
    const { renderer } = this.context
    const cl = (className) => renderer.renderRule(styles[className])

    return (
      <div className={cl('container')}>
        <GoArrowUp size={30}/>
        <div className={cl('center')}>{voteScore}</div>
        <GoArrowDown size={30}/>
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
  container: () => ({
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    alignSelf: 'center',
    justifySelf: 'center',
  }),
  center: () => ({
    textAlign: 'center',
    alignSelf: 'center',
  })
}
