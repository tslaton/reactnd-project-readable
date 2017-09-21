import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, NavLink } from 'react-router-dom'
import { fetchCategories } from '../actions/categories'
import { fetchPosts } from '../actions/posts'
import PostList from './PostList'
// Views
// Your application should have, at a minimum, four views:

// Default (Root)
// * should list all available categories, which should link to a category view for that category
// * should list all of the posts ordered by voteScore (highest score first)
// * should have a control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp
// * should have a control for adding a new post

// Category View
// * identical to the default view, but filtered to only include posts with the selected category

// Post Detail View
// * should show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score
// * should list all of the comments for that post, ordered by voteScore (highest first)
// * should have controls to edit or delete the post
// * should have a control to add a new comment.
// * implement comment form however you want (inline, modal, etc.)
// * comments should also have controls for editing or deleting

// Create/Edit View
// * should have a form to create new post or edit existing posts
// * when editing, existing data should be populated in the form

// Post/Comment UI
// * Posts and comments, in all views where they are displayed, should display their current score and should have controls to increment or decrement the voteScore for the object. Posts should display the number of comments associated with the post.
class App extends Component {
  componentDidMount() {
    this.props.fetchCategories()
    this.props.fetchPosts()
  }

  render() {
    const { categories, posts } = this.props

    return (
      <div className="app">
        <div className="nav">
          {categories.map((category) =>
            <NavLink key={`nav-${category.name}`} to={`/${category.path}`}>{category.name}</NavLink>
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
