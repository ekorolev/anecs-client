import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import mainReducer from './reducers'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(mainReducer)

ReactDOM.render(
  <Provider store={store}><App /></Provider>, 
  document.getElementById('root')
)