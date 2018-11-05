import React, { Component } from 'react'
import LeaderboardItem from './LeaderboardItem'
import { connect } from 'react-redux'

class LeaderboardList extends Component {
  render() {
    return (
      <div className='leaderboard-list'>
        { this.props.scores.map((score) => (
          <LeaderboardItem
            score={score}
            user={this.props.users[score.userId]}
            key={score.userId}
          />
        ))}
      </div>
    )
  }
}

function mapStateToProps({ users }) {

  const scores = Object.keys(users).map(uid => {
    const numAnswers = Object.keys(users[uid].answers).length
    const numQuestions = Object.keys(users[uid].questions).length
    return {
      userId: uid,
      numAnswers: numAnswers,
      numQuestions: numQuestions,
      total: numAnswers + numQuestions
  }})

  scores.sort((a,b) => (b.total - a.total))

console.log('LeaderboardList: ', scores)
  return {
    scores,
    users,
  }
}

export default connect(mapStateToProps)(LeaderboardList)
