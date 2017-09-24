// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// Styles
import cl from '../styles/renderer'

class Select extends Component {
  render() {
    const { id, label, options, value, performAction } = this.props

    return (
      <div className={cl('select')}>
        <label htmlFor={id}>{label}</label>&nbsp;
        <select id={id} value={value} onChange={event => performAction(event.target.value)}>
          {options.map((option) =>
            <option key={`${id}-${option.value}`} value={option.value}>{option.name}</option>
          )}
        </select>
      </div>
    )
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  actionOnChange: PropTypes.func.isRequired,
}

function mapDispatchToProps(dispatch, { actionOnChange }) {
  return {
    performAction: (value) => dispatch(actionOnChange(value))
  }
}

export default connect(null, mapDispatchToProps)(Select)