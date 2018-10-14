import React, { Component } from 'react'
import LoginForm from './LoginForm'

class Login extends Component {
  render() {
    return (
      <div className='login'>
        <h2 className='page-title'>Sign in</h2>
        <LoginForm />
      </div>
    )
  }
}

export default Login
