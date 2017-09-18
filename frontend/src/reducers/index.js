import { combineReducers } from 'redux'

import {
  ADD_POST,
  EDIT_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  DELETE_POST,
  ADD_COMMENT,
  EDIT_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  DELETE_COMMENT,
} from '../actions'

function post(state={}, action) {
  switch(action.type) {
    default:
      return state
  }
}

function comment(state={}, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  post,
  comment,
})