import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardBody, Row, Col } from 'reactstrap'
import { handleSaveAnswer } from '../actions/shared'

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
    const { question, dispatch } = this.props

    dispatch(handleSaveAnswer(answer, question.id))
  }

  render() {
    const { author, question } = this.props

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
                  disabled={this.state.answer === ''}
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

export default connect()(Poll)
