import theme from '../themes'

export const voter = ({ voteScore }) => ({
  display: 'grid',
  gridTemplateRows: voteScore !== undefined ? '1fr 1fr 1fr' : '1fr 1fr',
  alignSelf: 'start',
  justifySelf: 'center',
})

export const voteScore = () => ({
  textAlign: 'center',
  alignSelf: 'center',
})

export const arrowUp = () => ({
  ':hover': {
    color: theme.voterArrowUp,
  },
})

export const arrowDown = () => ({
  ':hover': {
    color: theme.voterArrowDown,
  },
})