import React, { Component } from 'react'
import Poll from './Poll'
import PollResults from './PollResults'
import QuestionNotFound from './QuestionNotFound'

class Question extends Component {
  render() {
    return (
      <div className="question">
        <h2 className='page-title'>Question Poll</h2>
        <Poll />
        <h2 className='page-title'>Question Results</h2>
        <PollResults />
        <h2 className='page-title'>Question Not Found</h2>
        <QuestionNotFound />
      </div>
    )
  }
}

export default Question
