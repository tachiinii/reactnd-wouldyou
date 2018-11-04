import React, { Component } from 'react'

class QuestionNotFound extends Component {
  render() {
    return (
      <div className='question-not-found'>
        <form>
          <img src='' className='poll-user-img' alt='' />
          <div className='question-intro'>
            A question was not found for the specified location. Use the following button to create your own question.
          </div>
          <button>Add a New Question</button>
        </form>
      </div>
    )
  }
}

export default QuestionNotFound
