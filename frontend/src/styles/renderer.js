// Libraries
import { createRenderer } from 'fela'
import monolithic from 'fela-monolithic'
// Styles
import * as styles from './styles'

const config = {
  enhancers: [ monolithic({ prettySelectors: true }) ]
}
export const renderer = createRenderer(config)

const cl = (className) => renderer.renderRule(styles[className])
export default cl