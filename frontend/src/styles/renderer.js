// Libraries
import { createRenderer } from 'fela'
import monolithic from 'fela-monolithic'
import prefixAll from 'inline-style-prefixer/static'
// Modules
import { capitalize } from '../utils'
// Styles
import * as rules from './rules'

const prefixerPlugin = styleObject => prefixAll(styleObject)
const config = {
  enhancers: [ monolithic({ prettySelectors: true }) ],
  plugins: [ prefixerPlugin ],
}
export const renderer = createRenderer(config)

export default function renderRule(className, props) {
  let ruleName = className
  // Accept hyphenated CSS-style names as well as camelCase
  let parts = className.split('-')
  if (parts.length > 1) {
    parts = parts.map(part => part.toLowerCase())
    parts = [parts[0], ...parts.slice(1).map(part => capitalize(part))]
    ruleName = parts.join('')
  }
  const rule = rules[ruleName]
  return props ? renderer.renderRule(rule, props) : renderer.renderRule(rule)
}