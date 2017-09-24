import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  DELETE_COMMENT,
} from '../actions/comments'

export default function comments(state=[], action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      const others = state.filter(comment => comment.parentId !== action.parentId)
      return others.reduce((acc, comment) =>
        acc.find((el) => el.id === comment.id) ? acc : [...acc, comment],
        action.comments
      )
    default:
      return state
  }
}