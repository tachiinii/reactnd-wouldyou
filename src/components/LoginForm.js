import React, { Component } from 'react'
import { Form, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class LoginForm extends Component {

  handleLogin = (e) => {
    this.props.dispatch(setAuthedUser(e.target.value))
  }

  render() {
    const { users } = this.props

    return (
      <Form className='login-form'>
        <Input
          type='select'
          bsSize='lg'
          className='form-control form-control-lg'
          onChange={this.handleLogin}
        >
          <option value=''>Select a user...</option>
          {Object.keys(users).map((uid) => (
            <option
              value={uid}
              key={uid}
            >
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
