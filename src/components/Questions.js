import React, { Component } from 'react'
import QuestionsList from './QuestionsList'
import QuestionsNav from './QuestionsNav'

class Questions extends Component {
  render() {
    return (
      <div className="questions">
        <h2 className='page-title'>Questions</h2>
        <div className='card'>
          <div className='card-header'>
            <QuestionsNav />
          </div>
          <div className='card-body'>
            <QuestionsList />
          </div>
        </div>
      </div>
    )
  }
}

export default Questions
