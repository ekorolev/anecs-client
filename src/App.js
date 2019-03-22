import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import MainLayout from './layouts/MainLayout'
import Anecdotes from './containers/AnecdoteList'
import AboutPage from './containers/AboutPageCountainer'
import CreatePage from './containers/CreatePageContainer'
import LoginPage from './containers/LoginPageContainer'
import Nav from './components/NavComponent'
import { 
  addAnecdotes,
  setCredentials
} from './actions'
import store from './store'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <MainLayout>
          <div className="text-center m-3">
            <h1>Anecdotes</h1>
          </div>
          <div className="container">
            <Nav />
          </div>
          <Route exact path="/" component={Anecdotes}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/create" component={CreatePage}/>
          <Route path="/login" component={LoginPage}/>
        </MainLayout>
      </HashRouter>
    )
  }

  upCredentialsFromLS() {
    let credentials = localStorage.getItem('credentials')
    if (credentials) credentials = JSON.parse(credentials)
    if (!credentials) return
    store.dispatch(setCredentials(credentials))
  }

  async componentWillMount() {
    this.upCredentialsFromLS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAnecdotes: anecdotes => dispatch(addAnecdotes(anecdotes))
  }
}

export default connect(null, mapDispatchToProps)(App)
