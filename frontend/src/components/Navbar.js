// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
// Styles
import cl from '../styles/renderer'
// Components
import Select from './Select'
// Actions
import { changeSortBy, changeSortOrder } from '../actions/sort'

class Navbar extends Component {
  render() {
    const { categories, sortPostsBy, orderPosts } = this.props

    return (
      <div className={cl('navbar')}>
        {categories.map((category) =>
          <NavLink className={cl('navlink')} key={`nav-${category.name}`} exact to={`/${category.path}`}>{category.name}</NavLink>
        )}
        <Select
          id="sort-by"
          label="Sort by:"
          options={[
            { value: 'voteScore', name: 'Votes' },
            { value: 'timestamp', name: 'Submission Time' },
            { value: 'author', name: 'Author' },
          ]}
          value={sortPostsBy}
          actionOnChange={changeSortBy}
        />
        <Select
          id="sort-order"
          label="Order:"
          options={[
            { value: 'ascending', name: 'A => Z' },
            { value: 'descending', name: 'Z => A' },
          ]}
          value={orderPosts}
          actionOnChange={changeSortOrder}
        />
      </div>
    )
  }
}

Navbar.propTypes = {
  categories: PropTypes.array.isRequired,
}

function mapStateToProps({ sortPostsBy, orderPosts }) {
  return {
    sortPostsBy,
    orderPosts,
  }
}

export default connect(mapStateToProps)(Navbar)