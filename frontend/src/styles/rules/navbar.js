import theme from '../themes'

export const navbar = () => ({
  backgroundColor: theme.navbarBackground,
  overflow: 'hidden',
})

export const navlink = () => ({
  display: 'block',
  float: 'left',
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

export const sortGroup = () => ({
  display: 'block',
  float: 'right',
  padding: '14px 16px',
})

export const select = () => ({
  display: 'inline',
  padding: '8px',
  color: theme.navlink,
})