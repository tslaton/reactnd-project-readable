// Libraries
import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
// Modules
import { fetchCategories } from '../actions/categories'
import { fetchPosts } from '../actions/posts'
// Components
import Navbar from './Navbar'
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
    const extendedCategories = [{ name: 'all', path: '' }, ...categories]

    return (
      <div>
        <Navbar categories={extendedCategories}/>
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