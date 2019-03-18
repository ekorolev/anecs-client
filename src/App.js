import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainLayout from './layouts/MainLayout'
import Anecdotes from './containers/AnecdoteList'
import { addAnecdotes } from './actions'

class App extends Component {
  render() {
    return (
      <MainLayout>
        <div className="text-center m-3">
          <h1>Anecdotes</h1>
        </div>
        <Anecdotes />
      </MainLayout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAnecdotes: anecdotes => dispatch(addAnecdotes(anecdotes))
  }
}

export default connect(null, mapDispatchToProps)(App)
