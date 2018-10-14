import React, { Component } from 'react'
import QuestionsList from './QuestionsList'
import QuestionsNav from './QuestionsNav'

class Questions extends Component {
  render() {
    return (
      <div className="questions">
        <h2 className='page-title'>Questions</h2>
        <QuestionsNav />
        <QuestionsList />
      </div>
    )
  }
}

export default Questions
