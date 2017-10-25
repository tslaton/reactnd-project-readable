const BASE_URL = 'http://localhost:3001'
const headers = {
  Authorization: 'fake-auth-trevor',
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

export function createPost(post) {
  return fetch(`${BASE_URL}/posts`, {
    headers: { ...headers,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ ...post }),
  })
    .then(res => res.json())
}

export function voteOnPost(id, vote) {
  return fetch(`${BASE_URL}/posts/${id}`, {
    headers: { ...headers,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ option: vote }),
  })
    .then(res => res.json())
}

export function editPost(id, title, body) {
  return fetch(`${BASE_URL}/posts/${id}`, {
    headers: { ...headers,
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify({
      title,
      body,
    }),
  })
    .then(res => res.json())
}

export function deletePost(id) {
  return fetch(`${BASE_URL}/posts/${id}`, {
    headers: headers,
    method: 'DELETE',
  })
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

export function postComment(comment) {
  return fetch(`${BASE_URL}/comments`, {
    headers: { ...headers,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ ...comment }),
  })
    .then(res => res.json())
}

export function voteOnComment(id, vote) {
  return fetch(`${BASE_URL}/comments/${id}`, {
    headers: { ...headers,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ option: vote }),
  })
    .then(res => res.json())
}

export function editComment(id, body, timestamp) {
  return fetch(`${BASE_URL}/comments/${id}`, {
    headers: { ...headers,
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify({
      body,
      timestamp,
    }),
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