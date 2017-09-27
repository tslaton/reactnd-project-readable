import theme from '../themes'

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
  gridTemplateColumns: '1fr 64px',
  marginBottom: '4px',
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