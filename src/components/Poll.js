import React, { Component } from 'react'
import { Card, CardBody, Row, Col } from 'reactstrap'

class Poll extends Component {
  render() {
    return (
      <Card className='poll'>
        <CardBody>
          <Row>
            <Col>
              <img src='' className='poll-user-img' alt='' />
              <div className='poll-user'>Colen Wilson asks:</div>
            </Col>
            <Col>
              <form>
                <div className='question-intro'>Would you rather?</div>
                <input type='radio' name='response' value='id1' /> Bat lefty
                <div className='question-intro'>or...</div>
                <input type='radio' name='response' value='id1' /> Bat lefty
                <button>Submit</button>
              </form>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default Poll
