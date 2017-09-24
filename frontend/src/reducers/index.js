import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import comments from './comments'
import { sortPostsBy, orderPosts } from './sort'

export default combineReducers({
  categories,
  posts,
  comments,
  sortPostsBy,
  orderPosts,
})