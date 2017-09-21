import {
  RECEIVE_POSTS,
  ADD_POST,
  EDIT_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  DELETE_POST,
} from '../actions/posts'

function posts(state=[], action) {
  switch(action.type) {
    case RECEIVE_POSTS:
      return action.posts
    default:
      return state
  }
}

export default posts