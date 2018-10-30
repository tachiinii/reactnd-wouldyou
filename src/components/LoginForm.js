import React, { Component } from 'react'
import { Form, Input } from 'reactstrap'

class LoginForm extends Component {

  users = {
    'colenwilson': {
      'id': 'colenwilson',
      'name': 'Colen Wilson'
    },
    'icecube': {
      'id': 'icecube',
      'name': 'Oshea Jackson'
    }
  }

  render() {
    return (
      <Form className='login-form'>
        <Input
          type='select'
          bsSize='lg'
          className='form-control-lg'
          onChange={this.props.doLogin}
        >
          <option value=''>Select a user...</option>
          {Object.keys(this.users).map((uid, index) => (
            <option value={this.users[uid].id} key={this.users[uid].id}>
              {this.users[uid].name}
            </option>
          ))}
        </Input>
      </Form>
    )
  }
}

export default LoginForm
