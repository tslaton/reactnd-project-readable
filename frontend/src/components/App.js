// Libraries
import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
// Components
import Navbar from './Navbar'
import PostList from './PostList'
import Post from './Post'
// Actions
import { fetchCategories } from '../actions/categories'
import { fetchPosts } from '../actions/posts'

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories()
    this.props.fetchPosts()
  }

  render() {
    const { categories, posts } = this.props
    const extendedCategories = [{ name: 'all', path: '' }, ...categories]

    return (
      <Switch>
        {extendedCategories.map((category) =>
          <Route key={`route-${category.name}`} exact path={`/${category.path}`} render={() =>
            <div>
              <Navbar categories={extendedCategories}/>
              <PostList posts={posts.filter(
                (post) => post.category === category.name || category.name === 'all'
              )}/>
            </div>
          }/>
        )}
        {posts.map((post) =>
          <Route key={`route-${post.category}-${post.id}`} exact path={`/${post.category}/${post.id}`} render={() =>
            <div>
              <Navbar parentCategory={post.category}/>
              <Post postData={post} viewMode="detail"/>
            </div>
          }/>
        )}
      </Switch>
    )
  }
}

function mapStateToProps({ categories, posts, sortPostsBy, orderPosts }) {
  const sortedPosts = posts.slice().sort((a, b) => {
    const v1 = a[sortPostsBy]
    const v2 = b[sortPostsBy]
    const compare = v1 < v2 ? -1
      : v1 > v2 ? 1
      : 0
    return orderPosts === 'ascending' ? compare : -compare
  })

  return {
    categories,
    posts: sortedPosts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => fetchCategories(dispatch),
    fetchPosts: (category) => fetchPosts(dispatch),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))