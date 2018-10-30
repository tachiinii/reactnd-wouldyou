import React, { Component } from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import QuestionsList from './QuestionsList'
import QuestionsNav from './QuestionsNav'

class Questions extends Component {
  render() {
    return (
      <div className="questions">
        <h2 className='page-title'>Questions</h2>
        <Card>
          <CardHeader>
            <QuestionsNav />
          </CardHeader>
          <CardBody>
            <QuestionsList />
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Questions
