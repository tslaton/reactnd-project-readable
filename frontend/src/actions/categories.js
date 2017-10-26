import * as api from '../utils/api'
import { RECEIVE_CATEGORIES } from './index'

function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  }
}

export function fetchCategories() {
  return (dispatch) => api.fetchCategories()
    .then(data => dispatch(receiveCategories(data.categories || [])))
}
