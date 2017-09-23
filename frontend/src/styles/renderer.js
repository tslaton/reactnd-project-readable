// Libraries
import { createRenderer } from 'fela'
import monolithic from 'fela-monolithic'
// Styles
import * as rules from './rules'

const config = {
  enhancers: [ monolithic({ prettySelectors: true }) ]
}
export const renderer = createRenderer(config)

const cl = (className) => renderer.renderRule(rules[className])
export default cl