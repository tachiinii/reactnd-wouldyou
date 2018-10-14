import React, { Component } from 'react'

class LoginForm extends Component {
  render() {
    return (
      <form className='login-form'>
        <select>
          <option value=''>Select a user...</option>
          <option value='colenwilson'>Colen Wilson</option>
        </select>
      </form>
    )
  }
}

export default LoginForm
