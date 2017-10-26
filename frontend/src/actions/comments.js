import * as api from '../utils/api'
import uuid from 'uuid/v1'
import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  REMOVE_COMMENT,
} from './index'

function receiveComments(parentId, comments) {
  return {
    type: RECEIVE_COMMENTS,
    parentId,
    comments,
  }
}

export function fetchComments(parentId) {
  return (dispatch) => api.fetchComments(parentId)
    .then(comments => dispatch(receiveComments(parentId, comments)))
}

export function postComment(comment) {
  return (dispatch) => api.postComment({ ...comment, id: uuid(), timestamp: Date.now() })
    .then(data => dispatch(addComment(data)))
}

function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}

export function saveEditedComment(editedComment) {
  return (dispatch) => api.editComment(editedComment.id, editedComment.body, Date.now())
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

export function voteOnComment(id, vote) {
  return (dispatch) => api.voteOnComment(id, vote)
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
  return (dispatch) => api.deleteComment(id)
    .then(() => dispatch(removeComment(id)))
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id,
  }
}