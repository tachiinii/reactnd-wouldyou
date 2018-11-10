import React from 'react'
import { Route } from 'react-router-dom'
import Questions from './Questions'
import Question from './Question'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'
import AppNavbar from './AppNavbar'

const AuthedContent = props => {
  return(
    <div>
      <AppNavbar doLogout={props.doLogout} />
      <Route exact path='/' render={() => (
        <Questions />
      )} />
      <Route path='/add' render={() => (
        <AddQuestion />
      )} />
      <Route path='/leaderboard' render={() => (
        <Leaderboard />
      )} />
      <Route path='/question/:qid' component={Question} />
    </div>
  )
}

export default AuthedContent
