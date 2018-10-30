import React, { Component } from 'react'
import { Card, CardTitle, CardBody } from 'reactstrap'
import LoginForm from './LoginForm'

class Login extends Component {
  render() {
    return (
      <Card className='login'>
        <CardBody>
          <CardTitle>Sign in</CardTitle>
          <LoginForm doLogin={this.props.doLogin} />
        </CardBody>
      </Card>
    )
  }
}

export default Login
