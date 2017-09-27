// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// Components
import Select from './Select'
// Actions
import { changeSortBy, changeSortOrder } from '../actions/sort'
// Icons
import GoArrowLeft from 'react-icons/lib/go/arrow-left'
// Styles
import scopedStyles from '../styles/renderer'
const cl = scopedStyles('navbar')

class Navbar extends Component {
  render() {
    const { parentCategory, categories, sortPostsBy, orderPosts } = this.props

    return (
      <div className={cl('navbar')}>
        {!parentCategory &&
          <div>
            {categories.map((category) =>
              <NavLink className={cl('navlink')} key={`nav-${category.name}`} exact to={`/${category.path}`}>{category.name}</NavLink>
            )}
            <div className={cl('sort-group')}>
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
          </div>
        }
        {parentCategory &&
          <div className={cl('back')}>
            <Link to={`/${parentCategory}`}>
              <GoArrowLeft size={30}/>
            </Link>
            <span>{parentCategory}</span>
          </div>
        }
      </div>
    )
  }
}

Navbar.propTypes = {
  categories: PropTypes.array,
  parentCategory: PropTypes.string,
}

function mapStateToProps({ sortPostsBy, orderPosts }) {
  return {
    sortPostsBy,
    orderPosts,
  }
}

export default connect(mapStateToProps)(Navbar)