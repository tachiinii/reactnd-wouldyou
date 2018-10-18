import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from './Login'
import Questions from './Questions'
import Question from './Question'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'
import AppNavbar from './AppNavbar'
import '../App.css'

class App extends Component {
  render() {
    return (
      <div className="app container">
        <h1 className='app-title'>Would You Rather App</h1>
        <AppNavbar />
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
        <Login />
      </div>
    );
  }
}

export default App;
