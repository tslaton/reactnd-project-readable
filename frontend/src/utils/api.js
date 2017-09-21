const BASE_URL = 'http://localhost:3001'
const headers = {
  Authorization: 'fake-auth-trevor'
}

// Categories
export function fetchCategories() {
  return fetch(`${BASE_URL}/categories`, {
    headers: headers,
  })
    .then(res => res.json())
}

// Posts
export function fetchPosts(category='') {
  const url = category ? `${BASE_URL}/${category}/posts` : `${BASE_URL}/posts`
  return fetch(url, {
    headers: headers,
  })
    .then(res => res.json())
}

export function fetchPost(id) {
  return fetch(`${BASE_URL}/posts/${id}`, {
    headers: headers,
  })
    .then(res => res.json())
}

export function addPost(post) {
  return fetch(`${BASE_URL}/posts`, {
    headers: headers,
    method: 'POST',
    body: post,
  })
    .then(res => res.json())
}

export function voteOnPost(id, vote) {
  return fetch(`${BASE_URL}/posts/${id}`, {
    headers: headers,
    method: 'POST',
    body: vote,
  })
    .then(res => res.json())
}

export function editPost(id, title, body) {
  return fetch(`${BASE_URL}/posts/${id}`, {
    headers: headers,
    method: 'PUT',
    body: {
      title,
      body,
    },
  })
    .then(res => res.json())
}

export function deletePost(id) {
  return fetch(`${BASE_URL}/posts/${id}`, {
    headers: headers,
    method: 'DELETE',
  })
    .then(res => res.json())
}

// Comments
export function fetchComments(postID) {
  return fetch(`${BASE_URL}/posts/${postID}/comments`, {
    headers: headers,
  })
    .then(res => res.json())
}

export function fetchComment(id) {
  return fetch(`${BASE_URL}/comments/${id}`, {
    headers: headers,
  })
    .then(res => res.json())
}

export function addComment(comment) {
  return fetch(`${BASE_URL}/comments`, {
    headers: headers,
    method: 'POST',
    body: comment,
  })
    .then(res => res.json())
}

export function voteOnComment(id, vote) {
  return fetch(`${BASE_URL}/comments/${id}`, {
    headers: headers,
    method: 'POST',
    body: vote,
  })
    .then(res => res.json())
}

export function editComment(id, body, timestamp) {
  return fetch(`${BASE_URL}/comments/${id}`, {
    headers: headers,
    method: 'PUT',
    body: {
      body,
      timestamp,
    },
  })
    .then(res => res.json())
}

export function deleteComment(id) {
  return fetch(`${BASE_URL}/comments/${id}`, {
    headers: headers,
    method: 'DELETE'
  })
    .then(res => res.json())
}