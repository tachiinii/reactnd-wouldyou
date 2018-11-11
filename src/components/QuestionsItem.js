import React from 'react'
import { Card, CardBody, CardFooter } from 'reactstrap'
import QuestionsItemUser from './QuestionsItemUser'
import QuestionsItemQuestion from './QuestionsItemQuestion'

const getFormattedTime = (timestamp) => {
  const date = new Date(timestamp)
  const time = date.toLocaleString(
    'en-US',
    {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }
  )

  return `${date.toDateString()} at ${time}`
}

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
    <CardFooter className='text-muted text-right small'>
      Asked on {getFormattedTime(question.timestamp)}
    </CardFooter>
  </Card>
)

export default QuestionsItem
