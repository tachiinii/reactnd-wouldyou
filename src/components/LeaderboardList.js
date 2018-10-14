import React, { Component } from 'react'
import LeaderboardItem from './LeaderboardItem'

class LeaderboardList extends Component {
  render() {
    return (
      <div className='leaderboard-list'>
        <LeaderboardItem/>
      </div>
    )
  }
}

export default LeaderboardList
