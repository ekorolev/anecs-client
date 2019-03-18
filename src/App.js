import React, { Component } from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import MainLayout from './layouts/MainLayout'
import Anecdotes from './containers/AnecdoteList'
import AboutPage from './components/AboutPage'
import Nav from './components/NavComponent'
import { addAnecdotes } from './actions'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <MainLayout>
          <div className="text-center m-3">
            <h1>Anecdotes</h1>
          </div>
          <div class="container">
            <Nav />
          </div>
          <Route exact path="/" component={Anecdotes}/>
          <Route path="/about" component={AboutPage}/>
        </MainLayout>
      </HashRouter>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAnecdotes: anecdotes => dispatch(addAnecdotes(anecdotes))
  }
}

export default connect(null, mapDispatchToProps)(App)
