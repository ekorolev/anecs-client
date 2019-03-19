import AboutPage from '../components/AboutPage'
import { connect } from 'react-redux'
import { setAnecdotesCount } from '../actions'

const mapStateToProps = state => ({
  anecdotes_count: state.statistic.count
})

const mapDispatchToProps = disptach => {
  return {
    setAnecdotesCount: count => disptach(setAnecdotesCount(count))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage)