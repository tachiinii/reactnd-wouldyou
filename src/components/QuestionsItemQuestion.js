import React, { Component } from 'react'

class QuestionsItemQuestion extends Component {
  render() {
    return (
      <div className='questions-item-question'>
        <h3 className='question-intro'>Would you rather?</h3>
        <p>
        Bat lefty...
        </p>
        <button className='btn btn-outline-primary'>
          View Question
        </button>
      </div>
    );
  }
}

export default QuestionsItemQuestion
