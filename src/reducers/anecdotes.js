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
    case 'SET_ANECDOTES':
      return [
        ...action.anecdotes
      ]
    default:
      return state
  }
}

export default anecdotes