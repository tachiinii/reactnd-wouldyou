import React, { Component } from 'react'
import { Card, CardBody, Row, Col, Progress, Badge } from 'reactstrap'

class PollResults extends Component {
  render() {
    const { author, question, user } = this.props
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    const optionOnePercent = Math.round((question.optionOne.votes.length / totalVotes) * 100)
    const optionTwoPercent = Math.round((question.optionTwo.votes.length / totalVotes) * 100)
console.log('PollResults: ', question)
    return (
      <div className="question">
        <h2 className='page-title'>Question Results</h2>
        <Card className='poll-results'>
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
                  {question.optionOne.text}
                  {user.answers[question.id] === 'optionOne' &&
                    (<Badge color='success' className='poll-selection'>You selected</Badge>)
                  }
                </h5>
                <div className='poll-score'>
                  {optionOnePercent}% - {question.optionOne.votes.length} out of {totalVotes} votes
                  <Progress value={optionOnePercent} />
                </div>

                <h4 className='question-intro'>or...</h4>

                <h5 className='poll-option'>
                  {question.optionTwo.text}
                  {user.answers[question.id] === 'optionTwo' &&
                    (<Badge color='success' className='poll-selection'>You selected</Badge>)
                  }
                </h5>
                <div className='poll-score'>
                  {optionTwoPercent}% - {question.optionTwo.votes.length} out of {totalVotes} votes
                  <Progress value={optionTwoPercent} />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default PollResults
