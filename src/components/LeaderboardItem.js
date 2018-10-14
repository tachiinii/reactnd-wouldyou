import React, { Component } from 'react'

class LeaderboardItem extends Component {
  render() {
    return (
      <div className='leaderboard-item'>
        <div className='score'>10</div>
        <img src='' className='' />
        <div className='stats'>
          <strong>Colen Wilson</strong><br />
          3 answered / 7 asked
        </div>
      </div>
    )
  }
}

export default LeaderboardItem
