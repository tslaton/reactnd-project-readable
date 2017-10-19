import * as api from '../utils/api'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

function receiveComments(parentId, comments) {
  return {
    type: RECEIVE_COMMENTS,
    parentId,
    comments,
  }
}

export function fetchComments(dispatch, parentId) {
  api.fetchComments(parentId)
    .then(comments => dispatch(receiveComments(parentId, comments)))
}

function addComment(parentId, body, author) {
  return {
    type: ADD_COMMENT,
    parentId,
    body,
    author,
  }
}

function editComment(timestamp, body) {
  return {
    type: EDIT_COMMENT,
    timestamp,
    body,
  }
}

export function voteOnComment(dispatch, id, vote) {
  api.voteOnComment(id, vote)
    .then(() => dispatch(vote === 'upVote' ? upvoteComment(id) : downvoteComment(id)))
}

function upvoteComment(id) {
  return {
    type: UPVOTE_COMMENT,
    id,
  }
}

function downvoteComment(id) {
  return {
    type: DOWNVOTE_COMMENT,
    id,
  }
}

export function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    id,
  }
}