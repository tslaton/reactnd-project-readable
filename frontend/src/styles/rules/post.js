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

export const title = () => ({
  fontSize: '20px',
  marginBottom: '4px',
})

export const content = () => ({
  display: 'grid',
  gridTemplateColumns: '24px 1fr',
})

export const expander = () => ({
  alignSelf: 'center',
  justifySelf: 'center',
  '> button': {
    outline: 'none',
    border: 'none',
    backgroundColor:' transparent',
    boxShadow: 'none',
  }
})

export const body = (params) => ({
  display: params.isExpanded ? 'block' : 'none',
  marginTop: '10px',
  padding: '8px',
  border: `1px solid ${theme.postBodyBackground}`,
  borderRadius: '10px',
})

export const info = () => ({
  paddingLeft: '8px',
})