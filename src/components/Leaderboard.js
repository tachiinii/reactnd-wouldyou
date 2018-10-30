import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap'
import LeaderboardList from './LeaderboardList'

class Leaderboard extends Component {
  render() {
    return (
      <div className='leaderboard'>
        <h2 className='page-title'>Leaderboard</h2>
        <Card className='leaderboard-list'>
          <CardBody>
            <LeaderboardList/>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Leaderboard
