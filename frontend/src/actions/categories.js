import * as api from '../utils/api'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  }
}

export function fetchCategories(dispatch) {
  api.fetchCategories()
    .then(data => dispatch(receiveCategories(data.categories || [])))
}
