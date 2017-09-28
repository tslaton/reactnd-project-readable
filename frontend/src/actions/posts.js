import * as api from '../utils/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'
export const DELETE_POST = 'DELETE_POST'

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

export function fetchPosts(dispatch) {
  api.fetchPosts()
    .then(data => dispatch(receivePosts(data || [])))
}

export function addPost ({ title, body, author, category }) {
  return {
    type: ADD_POST,
    title,
    body,
    author,
    category,
  }
}

export function editPost({ title, body }) {
  return {
    type: EDIT_POST,
    title,
    body,
  }
}

export function voteOnPost(dispatch, { id, vote }) {
  api.voteOnPost(id, vote)
    .then(() => dispatch(vote === 'upVote' ? upvotePost({ id }) : downvotePost({ id })))
}

export function upvotePost({ id }) {
  return {
    type: UPVOTE_POST,
    id,
  }
}

export function downvotePost({ id }) {
  return {
    type: DOWNVOTE_POST,
    id,
  }
}

export function deletePost({ id }) {
  return {
    type: DELETE_POST,
    id,
  }
}