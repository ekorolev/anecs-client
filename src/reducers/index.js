import { combineReducers } from 'redux'
import anecdotes from './anecdotes'
import statistic from './anecStatistic'
import auth from './auth'
import filter from './filter'

export default combineReducers({
  anecdotes,
  statistic,
  auth,
  filter
})