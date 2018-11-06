import React, { Component } from 'react'
import { Card, CardBody, Row, Col } from 'reactstrap'

class PollResults extends Component {
  render() {
    return (
      <div className="question">
        <h2 className='page-title'>Question Results</h2>
        <Card className='poll-results'>
          <CardBody>
            <Row>
              <Col>
                <div className='poll-user'>Colen Wilson asks:</div>
                <img src='' className='poll-user-img' alt='' />
              </Col>
              <Col>
                <div className='question-intro'>Would you rather?</div>
                <div className='score'>66%</div>
                <div className='response-text'>Bat lefty</div>
                <div className='summary'>2 out of 3 votes</div>

                <div className='question-intro'>or...</div>

                <div className='score'>33%</div>
                <div className='response-text'>Bat lefty</div>
                <div className='summary'>1 out of 3 votes</div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default PollResults
