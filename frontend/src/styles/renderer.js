// Libraries
import { createRenderer } from 'fela'
import monolithic from 'fela-monolithic'
import prefixAll from 'inline-style-prefixer/static'
// Modules
import { camelCase } from '../utils'
// Styles
import { scopedRules, allRules as rules } from './rules'

const prefixerPlugin = styleObject => prefixAll(styleObject)
const config = {
  enhancers: [ monolithic({ prettySelectors: true }) ],
  plugins: [ prefixerPlugin ],
}
export const renderer = createRenderer(config)

export default function scopedRenderRule(scope) {
  const casedScope = camelCase(scope)
  return function renderRule(ruleName, props) {
    const casedRuleName = camelCase(ruleName)
    const rule = scope ? scopedRules[casedScope][casedRuleName] : rules[casedRuleName]
    return renderer.renderRule(rule, props)
  }
}