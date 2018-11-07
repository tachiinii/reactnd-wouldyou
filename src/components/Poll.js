import React, { Component } from 'react'
import { Card, CardBody, Row, Col } from 'reactstrap'

class Poll extends Component {
  render() {
    const { author, question, user } = this.props

    return (
      <div className="question">
        <h2 className='page-title'>Question Poll</h2>
        <Card className='poll'>
          <CardBody>
            <Row>
              <Col xs='col-auto'>
                <div className='poll-user'>{author.name} asks:</div>
                <img
                  src={author.avatarURL}
                  className='poll-avatar'
                  alt={`Photo of ${author.name}`}
                />
              </Col>
              <Col>
                <h4 className='question-intro'>Would you rather?</h4>

                <h5 className='poll-option'>
                  <input type='radio' name='response' value='optionOne' /> {question.optionOne.text}
                </h5>

                <h4 className='question-intro'>or...</h4>

                <h5 className='poll-option'>
                  <input type='radio' name='response' value='optionTwo' /> {question.optionTwo.text}
                </h5>
                <button className='btn btn-primary'>Save Vote</button>

              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Poll
