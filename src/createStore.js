import AppStore from './store'
const store = AppStore(window.__REDUX_STATE__ || {})
export default store