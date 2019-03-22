import LoginPage from '../components/LoginPage'
import { connect } from 'react-redux'
import { setCredentials } from '../actions'

const mapDispatchToProps = disptach => {
  return {
    setCredentials: credentials => disptach(setCredentials(credentials))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(LoginPage)