export const CHANGE_SORT_BY = 'CHANGE_SORT_BY'
export const CHANGE_SORT_ORDER = 'CHANGE_SORT_ORDER'

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