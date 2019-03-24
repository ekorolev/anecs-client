import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import Loadable from 'react-loadable'
import store from './createStore'

const AppBundle = (
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
)

window.onload = async () => {
  await Loadable.preloadReady()
  ReactDOM.hydrate(
    AppBundle,
    document.getElementById('root')
  )
}