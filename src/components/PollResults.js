import React, { Component } from 'react'
import { Card, CardBody, Row, Col, Progress, Badge } from 'reactstrap'

class PollResults extends Component {

  getPercent(partial, total) {
    return Math.round((partial / total) * 100)
  }

  render() {
    const { author, question, user } = this.props
    const optionOneVotes = question.optionOne.votes.length
    const optionTwoVotes = question.optionTwo.votes.length
    const totalVotes = optionOneVotes + optionTwoVotes

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
                    (<Badge color='success' pill className='poll-selection'>You selected</Badge>)
                  }
                </h5>
                <div className='poll-score'>
                  {this.getPercent(optionOneVotes, totalVotes)}% - {optionOneVotes} out of {totalVotes} votes
                  <Progress value={this.getPercent(optionOneVotes, totalVotes)} />
                </div>

                <h4 className='question-intro'>or...</h4>

                <h5 className='poll-option'>
                  {question.optionTwo.text}
                  {user.answers[question.id] === 'optionTwo' &&
                    (<Badge color='success' pill className='poll-selection'>You selected</Badge>)
                  }
                </h5>
                <div className='poll-score'>
                  {this.getPercent(optionTwoVotes, totalVotes)}% - {optionTwoVotes} out of {totalVotes} votes
                  <Progress value={this.getPercent(optionTwoVotes, totalVotes)} />
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
