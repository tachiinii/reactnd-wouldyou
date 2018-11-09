import React, { Component } from 'react'
import { Card, CardBody, Row, Col } from 'reactstrap'

class Poll extends Component {

  state = {
    answer: ''
  }

  handleChange = (e) => {
    const answer = e.target.value
    this.setState({
      answer
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { answer } = this.state
    console.log('Poll submit: ', answer)

  }

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
                  alt={author.name}
                />
              </Col>
              <Col>
                <h4 className='question-intro'>Would you rather?</h4>

                <h5 className='poll-option'>
                  <input
                    type='radio'
                    name='answer'
                    value='optionOne'
                    onClick={this.handleChange}
                  /> {question.optionOne.text}
                </h5>

                <h4 className='question-intro'>or...</h4>

                <h5 className='poll-option'>
                  <input
                    type='radio'
                    name='answer'
                    value='optionTwo'
                    onClick={this.handleChange}
                  /> {question.optionTwo.text}
                </h5>
                <button
                  className='btn btn-primary'
                  onClick={this.handleSubmit}
                >
                  Save Vote
                </button>

              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Poll
