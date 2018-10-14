import React, { Component } from 'react'

class PollResults extends Component {
  render() {
    return (
      <div className='poll-results'>
        <div className='poll-user'>Colen Wilson asks:</div>
        <img src='' className='poll-user-img' />
        <div className='question-intro'>Would you rather?</div>
        <div className='score'>66%</div>
        <div className='response-text'>Bat lefty</div>
        <div className='summary'>2 out of 3 votes</div>

        <div className='question-intro'>or...</div>

        <div className='score'>33%</div>
        <div className='response-text'>Bat lefty</div>
        <div className='summary'>1 out of 3 votes</div>
      </div>
    )
  }
}

export default PollResults
