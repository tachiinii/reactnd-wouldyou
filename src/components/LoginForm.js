import React, { Component } from 'react'
import { Form, Input } from 'reactstrap'

class LoginForm extends Component {
  render() {
    return (
      <Form className='login-form'>
        <Input type='select' bsSize='lg' className='form-control-lg'>
          <option value=''>Select a user...</option>
          <option value='colenwilson'>Colen Wilson</option>
        </Input>
      </Form>
    )
  }
}

export default LoginForm
