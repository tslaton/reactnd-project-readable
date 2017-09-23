import theme from './themes'

export const navbar = () => ({
  backgroundColor: theme.navbarBackground,
  overflow: 'hidden',
})

export const navlink = () => ({
  float: 'left',
  display: 'block',
  color: theme.navlink,
  textAlign: 'center',
  padding: '14px 16px',
  textDecoration: 'none',
  fontSize: '17px',
  ':hover': {
    backgroundColor: theme.navlinkBackgroundHover,
    color: theme.navlinkHover,
  },
  '&.active': {
    backgroundColor: theme.navlinkBackgroundActive,
    color: theme.navlinkActive,
  },
})

export const post = () => ({
  display: 'grid',
  gridTemplateColumns: '40px 1fr',
})

export const container = () => ({
  display: 'grid',
  gridTemplateRows: '1fr 1fr 1fr',
  alignSelf: 'center',
  justifySelf: 'center',
})

export const center = () => ({
  textAlign: 'center',
  alignSelf: 'center',
})

export const content = () => ({
  alignSelf: 'center',
})