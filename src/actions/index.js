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

export const setTokenId = tokenId => ({
  type: 'SET_TOKEN_ID',
  tokenId
})

export const setAccessToken = accessToken => ({
  type: 'SET_ACCESS_TOKEN',
  accessToken
})

export const setRefreshToken = refreshToken => ({
  type: 'SET_REFRESH_TOKEN',
  refreshToken
})

export const setCredentials = credentials => ({
  type: 'SET_CREDENTIALS',
  credentials
})