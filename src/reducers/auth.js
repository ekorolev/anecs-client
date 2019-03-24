const initialState = {
  tokenId: null,
  accessToken: null,
  refreshToken: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN_ID':
      return Object.assign({}, state, {
        tokenId: action.tokenId
      })
    case 'SET_ACCESS_TOKEN':
      return Object.assign({}, state, {
        accessToken: action.accessToken
      })
    case 'SET_REFRESH_TOKEN':
      return Object.assign({}, state, {
        refreshToken: action.refreshToken
      })
    case 'SET_CREDENTIALS':
      return Object.assign({}, state, action.credentials)
    default:
      return state
  }
}

export default auth