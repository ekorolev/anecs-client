import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
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
import store from './createStore'

class App extends Component {
  goTo(route) {
    return () => {
      this.props.history.push(`/${route}`)
    }
  }
  render() {
    return (
      <MainLayout>
        <div className="text-center m-3">
          <h1>
            <span onDoubleClick={this.goTo.bind(this)('login')}>
              Лучшие
            </span>
            &nbsp;
            <span onDoubleClick={this.goTo.bind(this)('create')}>
              анекдоты
            </span>
          </h1>
        </div>
        <div className="container">
          <Nav />
        </div>
        <Route exact path="/" component={Anecdotes}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/create" component={CreatePage}/>
        <Route path="/login" component={LoginPage}/>
      </MainLayout>
    )
  }

  upCredentialsFromLS() {
    if (global.window) {
      let credentials = localStorage.getItem('credentials')
      if (credentials) credentials = JSON.parse(credentials)
      if (!credentials) return
      store.dispatch(setCredentials(credentials))
    }
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

export default connect(null, mapDispatchToProps)(withRouter(App))
