export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'
export const DELETE_POST = 'DELETE_POST'

export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

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

export function addComment({ parentId, body, author }) {
  return {
    type: ADD_COMMENT,
    parentId,
    body,
    author,
  }
}

export function editComment({ timestamp, body }) {
  return {
    type: EDIT_COMMENT,
    timestamp,
    body,
  }
}

export function upvoteComment({ id }) {
  return {
    type: UPVOTE_COMMENT,
    id,
  }
}

export function downvoteComment({ id }) {
  return {
    type: DOWNVOTE_COMMENT,
    id,
  }
}

export function deleteComment({ id }) {
  return {
    type: DELETE_COMMENT,
    id,
  }
}