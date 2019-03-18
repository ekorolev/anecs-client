const anecdotes = (state = [], action) => {
  console.log(`Action with anecdotes type: ${action.type}`)
  switch (action.type) {
    case 'ADD_ANECDOTES':
      return [
        ...state,
        ...action.anecdotes
      ]
    default:
      return state
  }
}

export default anecdotes