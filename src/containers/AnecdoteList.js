import AnecdoteList from '../components/AnecdoteList'
import { addAnecdotes } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  anecdotes: state.anecdotes
})

const mapDispatchToProps = dispatch => {
  return {
    addAnecdotes: anecdotes => dispatch(addAnecdotes(anecdotes))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)