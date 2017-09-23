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
    const { renderer } = this.context
    const fela = renderer.renderRule

    return (
      <div>
        <div className={fela(styles.navBar)}>
          {categories.map((category) =>
            <NavLink className={fela(styles.navLink)} key={`nav-${category.name}`} to={`/${category.path}`}>{category.name}</NavLink>
          )}
        </div>
        <Route exact path="/" render={() =>
          <PostList posts={posts}/>
        }/>
        {categories.map((category) =>
          <Route key={`route-${category.name}`} exact path={`/${category.path}`} render={() =>
            <PostList posts={
              posts.filter(
                (post) => post.category === category.name
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
  app: () => ({
    display: 'grid',
    gridTemplateRows: '48px auto',
  }),
  navBar: () => ({
    backgroundColor: '#333',
    overflow: 'hidden',
  }),
  navLink: () => ({
    float: 'left',
    display: 'block',
    color: '#f2f2f2',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
    fontSize: '17px',
    ':hover': {
      backgroundColor: '#ddd',
      color: 'black',
    },
    '&.active': {
      backgroundColor: '#4CAF50',
      color: 'white',
    },
  }),
}