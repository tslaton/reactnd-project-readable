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
  '> div': {
    padding: '8px',
  }
})

export const select = () => ({
  display: 'inline',
  color: theme.navlink,
})

export const back = () => ({
  display: 'grid',
  gridTemplateColumns: '48px 1fr',
  '> a': {
    alignSelf: 'center',
    justifySelf: 'center',
    textDecoration: 'none',
    color: theme.navlink,
    ':hover': {
      color: theme.navlinkBackgroundActive,
    }
  },
  '> span': {
    justifySelf: 'start',
    padding: '14px 0',
    fontSize: '17px',
    color: theme.navlink,
  },
})