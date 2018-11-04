import React, { Component } from 'react'

class Poll extends Component {
  render() {
    return (
      <div className='poll'>
        <form>
          <div className='poll-user'>Colen Wilson asks:</div>
          <img src='' className='poll-user-img' alt='' />
          <div className='question-intro'>Would you rather?</div>
          <input type='radio' name='response' value='id1' /> Bat lefty
          <div className='question-intro'>or...</div>
          <input type='radio' name='response' value='id1' /> Bat lefty
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Poll
