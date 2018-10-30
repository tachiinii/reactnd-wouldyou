import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Questions from './Questions'
import Question from './Question'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'
import AppNavbar from './AppNavbar'

class AuthedContent extends Component {
  render() {
    return(
      <div>
        <AppNavbar doLogout={this.props.doLogout} />
        <Route exact path='/' render={() => (
          <Questions />
        )} />
        <Route path='/add' render={() => (
          <AddQuestion />
        )} />
        <Route path='/leaderboard' render={() => (
          <Leaderboard />
        )} />
        <Route path='/question' render={() => (
          <Question />
        )} />
      </div>
    )
  }
}

export default AuthedContent
