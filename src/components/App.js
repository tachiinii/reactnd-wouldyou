import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from './Login'
import QuestionsList from './QuestionsList'
import Poll from './Poll'
import LeaderBoard from './LeaderBoard'

class App extends Component {
  render() {
    return (
      <div className="App">
        Would You Rather App
        <Route exact path='/' render={() => (
          <QuestionsList />
        )} />
        <Route path='/question' render={() => (
          <Poll />
        )} />
        <Route path='/leaderboard' render={() => (
          <LeaderBoard />
        )} />
        <Login />
      </div>
    );
  }
}

export default App;
