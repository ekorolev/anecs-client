import React from 'react'

class SigninForm extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
    this.onFieldChange = this.onFieldChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFieldChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault()
    console.log('signin')
    this.props.submitHandler(this.state.username, this.state.password)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} method="POST">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            onChange={this.onFieldChange}
            value={this.state.username} />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={this.onFieldChange}
            value={this.state.password} />
        </div>
        <div className="form-group">
          <input 
            type="submit"
            className="btnSubmit"
            value="Sign in" />
        </div>
      </form>
    )
  }
}

export default SigninForm