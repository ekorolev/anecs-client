import {
  createStore,
  compose,
  applyMiddleware
} from 'redux'
import ReduxThunk from 'redux-thunk'
import mainReducer from './reducers'

const createStoreWithMiddleware = compose(applyMiddleware(ReduxThunk))(createStore)

export default (initialState = {}) => {
  return createStoreWithMiddleware(mainReducer, initialState)
}