import {
  CHANGE_SORT_BY,
  CHANGE_SORT_ORDER,
} from '../actions/sort'

export function sortPostsBy(state='voteScore', action) {
  switch(action.type) {
    case CHANGE_SORT_BY:
      return action.sortBy
    default:
      return state
  }
}

export function orderPosts(state='desc', action) {
  switch(action.type) {
    case CHANGE_SORT_ORDER:
      return action.sortOrder
    default:
      return state
  }
}