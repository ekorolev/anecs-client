const filter = (state = 'PUBLISHED', action) => {
  switch (action.type) {
    case 'SET_FILTER_PUBLISHED':
      return 'PUBLISHED'
    case 'SET_FILTER"FOR_PUBLICATION':
      return 'FOR_PUBLICATION'
    default:
      return state
  }
}

export default filter