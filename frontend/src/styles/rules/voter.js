export const voter = (props) => ({
  display: 'grid',
  gridTemplateRows: props.voteScore ? '1fr 1fr 1fr' : '1fr 1fr',
  alignSelf: 'start',
  justifySelf: 'center',
})

export const voteScore = () => ({
  textAlign: 'center',
  alignSelf: 'center',
})