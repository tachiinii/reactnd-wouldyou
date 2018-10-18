import React, { Component } from 'react'
import LoginForm from './LoginForm'

class Login extends Component {
  render() {
    return (
      <div className='card text-center login'>
        <div className='card-body'>
          <h2 className='page-title'>Sign in</h2>
          <LoginForm />
        </div>
      </div>
    )
  }
}

export default Login
