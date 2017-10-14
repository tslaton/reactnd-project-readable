import theme from '../themes'

export const actionBar = () => ({
  marginTop: '20px',
  marginLeft: '40px',
})

export const addPost = () => ({
  color: theme.newPostButtonText,
  background: theme.newPostButtonBackground,
  borderRadius: '10px',
  borderWidth: '2px',
  borderColor: theme.newPostButtonBorder,
  outline: 'none',
  padding: '10px',
  fontSize: '16px',
  fontWeight: 'bold',
  ':hover': {
    background: theme.newPostButtonBackgroundHover,
    borderColor: theme.newPostButtonBorderHover,
  }
})