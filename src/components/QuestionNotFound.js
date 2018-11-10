import React from 'react'
import { withRouter } from 'react-router-dom'
import { Card, CardBody, Row, Col } from 'reactstrap'
import NotFoundImage from '../assets/question-not-found.jpg'

const QuestionNotFound = props => {
  return (
    <div className="question">
      <h2 className='page-title'>Question Not Found</h2>
      <Card className='question-not-found'>
        <CardBody>
          <Row>
            <Col xs='col-auto'>
              <img src={NotFoundImage} className='poll-not-found-image' alt='Q' />
            </Col>
            <Col>
              <div className='question-intro'>
                A question was not found for the specified location. Use the following button to create your own question.
              </div>
              <button
                className='btn btn-primary'
                onClick={() => props.history.push('/add')}
              >
                Add a New Question
              </button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  )
}

export default withRouter(QuestionNotFound)
