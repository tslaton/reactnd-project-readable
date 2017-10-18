import theme from '../themes'
import { nakedButton } from './common'

export const post = () => ({
  display: 'grid',
  gridTemplateColumns: '40px 1fr',
  padding: '20px 20px 0 0',
})

export const panel = () => ({
  padding: '8px 10px',
  backgroundColor: theme.postPanelBackground,
  borderRadius: '10px',
})

export const titleBar = () => ({
  display: 'grid',
  gridTemplateColumns: '1fr 72px',
  fontSize: '20px',
  marginBottom: '4px',
})

export const title = () => ({
  alignSelf: 'center',
  justifySelf: 'start',
  textDecoration: 'none',
  color: theme.title,
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

export const content = ({ viewMode }) => ({
  display: 'grid',
  gridTemplateColumns: viewMode === 'detail' ? '1fr' : '32px 1fr',
})

export const expander = ({ viewMode }) => ({
  display: viewMode === 'list' ? 'block' : 'none',
  alignSelf: 'center',
  justifySelf: 'center',
  '> button': nakedButton(),
})

export const body = ({ viewMode, isExpanded }) => ({
  display: viewMode === 'detail' || isExpanded ? 'block' : 'none',
  marginTop: '10px',
  padding: '8px',
  border: viewMode === 'list' ? `1px solid ${theme.postBodyBackground}` : 'none',
  borderRadius: '10px',
  color: viewMode === 'detail' ? theme.postDetailText : theme.postDefaultText,
  backgroundColor: viewMode === 'detail' ? theme.postBodyBackground : 'none',
})

export const info = () => ({
  paddingLeft: '8px',
})