import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Questions from './Questions'
import Question from './Question'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'
import AppNavbar from './AppNavbar'
import PageNotFound from './PageNotFound'

const AuthedContent = props => {
  return(
    <div>
      <AppNavbar doLogout={props.doLogout} />
      <Switch>
        <Route exact path='/' component={Questions} />
        <Route path='/add' component={AddQuestion} />
        <Route path='/leaderboard' component={Leaderboard} />
        <Route path='/question/:qid' component={Question} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}

export default AuthedContent
