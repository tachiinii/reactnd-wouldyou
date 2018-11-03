import React, { Component, Fragment } from 'react'
import { Container } from 'reactstrap'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import AuthedContent from './AuthedContent'
import '../App.css'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Container className="app">
          <h1 className='app-title'>Would You Rather App</h1>
          { this.props.authedUser !== null
            ? <AuthedContent />
            : <Login />
          }
          </Container>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(App);
