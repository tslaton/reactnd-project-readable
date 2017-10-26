import {
  CHANGE_SORT_BY,
  CHANGE_SORT_ORDER,
} from './index'

export function changeSortBy(sortBy) {
  return {
    type: CHANGE_SORT_BY,
    sortBy,
  }
}

export function changeSortOrder(sortOrder) {
  return {
    type: CHANGE_SORT_ORDER,
    sortOrder,
  }
}