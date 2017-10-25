import * as api from '../utils/api'
import uuid from 'uuid/v1'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

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

export function postComment(dispatch, comment) {
  api.postComment({ ...comment, id: uuid(), timestamp: Date.now() })
    .then(data => dispatch(addComment(data)))
}

function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}

export function saveEditedComment(dispatch, editedComment) {
  api.editComment(editedComment.id, editedComment.body, Date.now())
    .then(data => dispatch(editComment(data.id, data.body, data.timestamp)))
}

function editComment(id, body, timestamp) {
  return {
    type: EDIT_COMMENT,
    id,
    body,
    timestamp,
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

export function deleteComment(dispatch, id) {
  api.deleteComment(id)
    .then(() => dispatch(removeComment(id)))
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id,
  }
}