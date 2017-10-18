// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// Styles
import scopedStyles from '../styles/renderer'
const cl = scopedStyles('navbar')

class Select extends Component {
  render() {
    const { id, label, options, value, onChange, performAction, disabled } = this.props

    return (
      <div className={cl('select')}>
        <label htmlFor={id}>{label}</label>&nbsp;
        <select
          id={id}
          value={value}
          onChange={performAction ? event => performAction(event.target.value) : onChange}
          disabled={disabled}
         >
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
  onChange: PropTypes.func,
  actionOnChange: PropTypes.func,
  disabled: PropTypes.bool,
}

function mapDispatchToProps(dispatch, { actionOnChange }) {
  return {
    performAction: actionOnChange ? (value) => dispatch(actionOnChange(value)) : null
  }
}

export default connect(null, mapDispatchToProps)(Select)