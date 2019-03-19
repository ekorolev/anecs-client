export const addAnecdotes = anecdotes => ({
  type: 'ADD_ANECDOTES',
  anecdotes
})

export const addAnecdote = anecdote => ({
  type: 'ADD_ANECDOTE',
  anecdote
})

export const setAnecdotesCount = count => ({
  type: 'SET_ANECDOTES_COUNT',
  count
})