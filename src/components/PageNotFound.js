import React from 'react'
import { Card, CardBody, Row, Col } from 'reactstrap'
import NotFoundImage from '../assets/question-not-found.jpg'

const NotFound = props => {
  return (
    <div className="question">
      <h2 className='page-title'>Page Not Found</h2>
      <Card className='question-not-found'>
        <CardBody>
          <Row>
            <Col xs='col-auto'>
              <img src={NotFoundImage} className='poll-not-found-image' alt='Q' />
            </Col>
            <Col>
              <div>
                Content not found for this URL path.
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  )
}

export default NotFound
