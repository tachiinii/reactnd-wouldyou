import React from 'react'
import { Card, CardTitle, CardBody } from 'reactstrap'
import LoginForm from './LoginForm'

const Login = props => (
  <Card className='login'>
    <CardBody>
      <CardTitle>Sign in</CardTitle>
      <LoginForm doLogin={props.doLogin} />
    </CardBody>
  </Card>
)

export default Login
