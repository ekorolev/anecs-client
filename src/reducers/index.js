import { combineReducers } from 'redux'
import anecdotes from './anecdotes'
import statistic from './anecStatistic'

export default combineReducers({
  anecdotes,
  statistic
})