const anecdotes = (state = [], action) => {
  console.log(`Action with anecdotes type: ${action.type}`)
  switch (action.type) {
    case 'ADD_ANECDOTES':
      return [
        ...state,
        ...action.anecdotes
      ]
    case 'ADD_ANECDOTE':
      return [
        action.anecdote,
        ...state
      ]
    default:
      return state
  }
}

export default anecdotes