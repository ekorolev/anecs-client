import AppStore from './store'
let store = null
if (global.window) {
  store = AppStore(window.__REDUX_STATE__ || {})
} else {
  store = AppStore()
}
export default store