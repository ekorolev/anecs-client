import React from 'react'
import SigninForm from './SigninForm'
import SignupForm from './SignupForm'
import api from '../api'
import './LoginPage.css'

class LoginPage extends React.Component {
  constructor() {
    super()

    this.onSignin = this.onSignin.bind(this)
    this.onSignup = this.onSignup.bind(this)  
  }

  async onSignin(username, password) {
    console.log(`Sign in with ${username} and password`)
    const result = await api.createToken({ username, password })
    const credentials = {
      tokenId: result.tokenId,
      accessToken: result.accessToken,
      refreshToken: result.refreshToken
    }
    this.props.setCredentials(credentials)
    localStorage.setItem('credentials', JSON.stringify(credentials))
    console.log(result)
  }

  async onSignup(username, password) {
    console.log(`Sign up with ${username} and password`)
    const result = await api.register({ username, password })
    const credentials = {
      tokenId: result.tokenId,
      accessToken: result.accessToken,
      refreshToken: result.refreshToken
    }
    this.props.setCredentials(credentials)
    localStorage.setItem('credentials', JSON.stringify(credentials))
    console.log(result)
  }

  render() {
    return (
      <div className="container">
        <div className="row my-3">
          <div className="col-md-6 login-form-1">
            <h3>Sign In</h3>
            <SigninForm submitHandler={this.onSignin}/>
          </div>
          <div className="col-md-6 login-form-2">
            <h3>Sign Up</h3>
            <SignupForm submitHandler={this.onSignup}/>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage