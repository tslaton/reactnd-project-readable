import theme from '../themes'

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
  gridTemplateColumns: '1fr 64px',
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
  '> a': {
    fontSize: '12px',
    textDecoration: 'none',
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
  '> button': {
    outline: 'none',
    border: 'none',
    backgroundColor:' transparent',
    boxShadow: 'none',
  }
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