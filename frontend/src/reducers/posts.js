import {
  RECEIVE_POSTS,
  ADD_POST,
  EDIT_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  REMOVE_POST,
} from '../actions/posts'

export default function posts(state=[], action) {
  switch(action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case ADD_POST:
      return [...state, action.post]
    case UPVOTE_POST:
      return state.map((post) => {
        if (post.id === action.id) {
          return {...post, voteScore: post.voteScore + 1}
        }
        else {
          return post
        }
      })
    case DOWNVOTE_POST:
      return state.map((post) => {
        if (post.id === action.id) {
          return {...post, voteScore: post.voteScore - 1}
        }
        else {
          return post
        }
      })
    case REMOVE_POST:
      return state.filter((post) => post.id !== action.id)
    default:
      return state
  }
}