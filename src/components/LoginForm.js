import React, { Component } from 'react'
import { Form, Input } from 'reactstrap'
import { connect } from 'react-redux'

class LoginForm extends Component {

  render() {
    const { doLogin, users } = this.props

    return (
      <Form className='login-form'>
        <Input
          type='select'
          bsSize='lg'
          className='form-control-lg'
          onChange={doLogin}
        >
          <option value=''>Select a user...</option>
          {Object.keys(users).map((uid, index) => (
            <option value={users[uid].id} key={users[uid].id}>
              {users[uid].name}
            </option>
          ))}
        </Input>
      </Form>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(LoginForm)
