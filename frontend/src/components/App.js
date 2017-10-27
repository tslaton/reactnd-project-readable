// Libraries
import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import * as _ from 'lodash'
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
    const { categories, posts, history } = this.props
    const extendedCategories = [{ name: 'all', path: '' }, ...categories]

    return (
      <Switch>
        {extendedCategories.map((category) =>
          <Route key={`route-${category.name}`} exact path={`/${category.path}`} render={() =>
            <div>
              <Navbar categories={extendedCategories}/>
              <PostList category={category.name} posts={posts.filter(
                (post) => post.category === category.name || category.name === 'all'
              )}/>
            </div>
          }/>
        )}
        {posts.map((post) =>
          <Route key={`route-${post.category}-${post.id}`} exact path={`/${post.category}/${post.id}`} render={() =>
            <div>
              <Navbar parentCategory={post.category}/>
              <Post postData={post} viewMode="detail" goBack={history.goBack}/>
            </div>
          }/>
        )}
      </Switch>
    )
  }
}

// To address reviewer's comment: _.orderBy does not mutate the input data.
// Therefore, I believe it is not necessary to move this code to a reducer.
// I actually prefer sorting only the displayed data.
function mapStateToProps({ categories, posts, sortPostsBy, orderPosts }) {
  return {
    categories,
    posts: _.orderBy(posts, [sortPostsBy], [orderPosts]),
  }
}

export default withRouter(connect(mapStateToProps, {fetchCategories, fetchPosts})(App))