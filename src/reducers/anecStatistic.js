const initialState = {
  count: 0
}

const statistic = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ANECDOTES_COUNT':
      return Object.assign({}, state, {
        count: action.count
      })
    default:
      return state
  }
}

export default statistic