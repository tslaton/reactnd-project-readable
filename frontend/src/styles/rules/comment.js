import theme from '../themes'
import { nakedButton } from './common'

export const comment = () => ({
  display: 'grid',
  gridTemplateColumns: '40px 1fr',
  padding: '20px 20px 0 20px',
})

export const panel = () => ({
  padding: '8px 10px',
  backgroundColor: theme.postPanelBackground,
  borderRadius: '10px',
})

export const infoBar = () => ({
  display: 'grid',
  gridTemplateColumns: '1fr 72px',
  marginBottom: '4px',
})

export const actions = () => ({
  alignSelf: 'start',
  justifySelf: 'end',
  '> button': {
    ...nakedButton(),
    fontSize: '12px',
    padding: '2px',
    color: theme.action,
  }
})