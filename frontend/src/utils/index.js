import { format } from 'date-fns'

export function capitalize (str='') {
  return typeof str !== 'string'
    ? ''
    : str[0].toUpperCase() + str.slice(1)
}

export function camelCase(str) {
  let parts = str.split('-')
  if (parts.length > 1) {
    parts = parts.map(part => part.toLowerCase())
    parts = [parts[0], ...parts.slice(1).map(part => capitalize(part))]
    str = parts.join('')
  }
  return str
}

export function kebabCase(str) {
  return str.split(/(?=[A-Z])/).map((part) => part.toLowerCase()).join('-')
}

export function formatTime(timestamp) {
  return format(timestamp, 'MMMM Do, YYYY')
}

export function compare(key, order='ascending') {
  return (a, b) => {
    const v1 = a[key]
    const v2 = b[key]
    const compare = v1 < v2 ? -1
      : v1 > v2 ? 1
      : 0
    return order === 'ascending' ? compare : -compare
  }
}