// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter, Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
// Modules
import { fetchCategories } from '../actions/categories'
import { fetchPosts } from '../actions/posts'
// Components
import PostList from './PostList'
// Styling
import theme from '../themes'

// Post Detail View
// * should show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score
// * should list all of the comments for that post, ordered by voteScore (highest first)
// * should have controls to edit or delete the post
// * should have a control to add a new comment.
// * implement comment form however you want (inline, modal, etc.)
// * comments should also have controls for editing or deleting
class App extends Component {
  componentDidMount() {
    this.props.fetchCategories()
    this.props.fetchPosts()
  }

  render() {
    const { categories, posts } = this.props
    const extendedCategories = [{ name: 'all', path: '' }, ...categories]
    const { renderer } = this.context
    const cl = (className) => renderer.renderRule(styles[className])

    return (
      <div>
        <div className={cl('navbar')}>
          {extendedCategories.map((category) =>
            <NavLink className={cl('navlink')} key={`nav-${category.name}`} exact to={`/${category.path}`}>{category.name}</NavLink>
          )}
        </div>
        {extendedCategories.map((category) =>
          <Route key={`route-${category.name}`} exact path={`/${category.path}`} render={() =>
            <PostList posts={
              posts.filter(
                (post) => post.category === category.name || category.name === 'all'
              )
            }/>
          }/>
        )}
      </div>
    )
  }
}

App.contextTypes = { renderer: PropTypes.object.isRequired }

function mapStateToProps({ categories, posts }) {
  return {
    categories,
    posts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => fetchCategories(dispatch),
    fetchPosts: (category) => fetchPosts(dispatch),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

const styles = {
  navbar: () => ({
    backgroundColor: theme.navbarBackground,
    overflow: 'hidden',
  }),
  navlink: () => ({
    float: 'left',
    display: 'block',
    color: theme.navlink,
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
    fontSize: '17px',
    ':hover': {
      backgroundColor: theme.navlinkBackgroundHover,
      color: theme.navlinkHover,
    },
    '&.active': {
      backgroundColor: theme.navlinkBackgroundActive,
      color: theme.navlinkActive,
    },
  }),
}