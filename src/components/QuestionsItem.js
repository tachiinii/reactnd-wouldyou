import React from 'react'
import { Card, CardBody } from 'reactstrap'
import QuestionsItemUser from './QuestionsItemUser'
import QuestionsItemQuestion from './QuestionsItemQuestion'

const QuestionsItem = ({ question }) => (
  <Card color='primary' outline className="questions-item">
    <CardBody>
      <div className='row'>
        <div className='col-auto'>
          <QuestionsItemUser author={question.author} />
        </div>
        <div className='col'>
          <QuestionsItemQuestion
            id={question.id}
            text={question.optionOne.text}
          />
        </div>
      </div>
    </CardBody>
  </Card>
)

export default QuestionsItem
