import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import AuthedContent from './AuthedContent'
import '../App.css'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

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
    return (
      <Router>
        <Container className="app">
          <h1 className='app-title'>Would You Rather App</h1>
          { this.state.authedUser
            ? <AuthedContent doLogout={this.handleLogout} />
            : <Login doLogin={this.handleLogin} />
          }
        </Container>
      </Router>
    );
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(App);
