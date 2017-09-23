// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
// Styles
import cl from '../styles/renderer'

class Navbar extends Component {
  render() {
    const { categories } = this.props

    return (
      <div className={cl('navbar')}>
        {categories.map((category) =>
          <NavLink className={cl('navlink')} key={`nav-${category.name}`} exact to={`/${category.path}`}>{category.name}</NavLink>
        )}
      </div>
    )
  }
}

Navbar.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default Navbar