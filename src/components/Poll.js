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
                <img
                  src={author.avatarURL}
                  className='poll-avatar'
                  alt={`Photo of ${author.name}`} />
                <div className='poll-user'>{author.name} asks:</div>
              </Col>
              <Col>
                <form>
                  <div className='question-intro'>Would you rather?</div>
                  <input type='radio' name='response' value='optionOne' /> {question.optionOne.text}
                  <div className='question-intro'>or...</div>
                  <input type='radio' name='response' value='optionTwo' /> {question.optionTwo.text}
                  <button className='btn btn-primary'>Save Question</button>
                </form>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Poll
