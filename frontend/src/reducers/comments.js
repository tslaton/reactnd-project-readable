import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  REMOVE_COMMENT,
} from '../actions'

export default function comments(state=[], action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      const others = state.filter(comment => comment.parentId !== action.parentId)
      return others.reduce((acc, comment) =>
        acc.find((el) => el.id === comment.id) ? acc : [...acc, comment],
        action.comments
      )
    case ADD_COMMENT:
      return [...state, action.comment]
    case EDIT_COMMENT:
      return state.map((comment) => {
        if (comment.id === action.id) {
          return {...comment, body: action.body, timestamp: action.timestamp}
        }
        else {
          return comment
        }
      })
    case UPVOTE_COMMENT:
      return state.map((comment) => {
        if (comment.id === action.id) {
          return {...comment, voteScore: comment.voteScore + 1}
        }
        else {
          return comment
        }
      })
    case DOWNVOTE_COMMENT:
      return state.map((comment) => {
        if (comment.id === action.id) {
          return {...comment, voteScore: comment.voteScore - 1}
        }
        else {
          return comment
        }
      })
    case REMOVE_COMMENT:
      return state.filter(comment => comment.id !== action.id)
    default:
      return state
  }
}