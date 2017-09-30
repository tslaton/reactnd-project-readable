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
