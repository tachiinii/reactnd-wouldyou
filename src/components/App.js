import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Login from './Login'
import AuthedContent from './AuthedContent'
import '../App.css'

class App extends Component {

  state = {
    authedUser: ''
  }

  handleLogin = (e) => {
    this.setState({ authedUser: e.target.value })
  }

  handleLogout = () => {
    this.setState({ authedUser: '' })
  }

  render() {
    console.log('authedUser: ',this.state.authedUser)
    return (
      <Container className="app">
        <h1 className='app-title'>Would You Rather App</h1>
        { this.state.authedUser
          ? <AuthedContent doLogout={this.handleLogout} />
          : <Login doLogin={this.handleLogin} />
        }
      </Container>
    );
  }
}

export default App;
