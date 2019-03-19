import CreatePage from '../components/CreatePage'
import { connect } from 'react-redux'
import { addAnecdote } from '../actions'

const mapDispatchToProps = disptach => {
  return {
    addAnecdote: anecdote => disptach(addAnecdote(anecdote))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreatePage)