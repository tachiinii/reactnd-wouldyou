import React, { Component } from 'react'
import LeaderboardList from './LeaderboardList'

class Leaderboard extends Component {
  render() {
    return (
      <div className='leaderboard'>
        <h2 className='page-title'>Leaderboard</h2>
        <div className='leaderboard-list'>
          <LeaderboardList/>
        </div>
      </div>
    )
  }
}

export default Leaderboard
