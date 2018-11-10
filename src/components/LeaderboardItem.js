import React from 'react'
import { Card, CardBody, Row, Col } from 'reactstrap'

const LeaderboardItem = ({ user, score }) => (
  <Card color='primary' outline className='leaderboard-item'>
    <CardBody>
      <Row>
        <Col xs='col-auto'>
        <img
          src={user.avatarURL}
          className='leaderboard-avatar'
          alt={user.name}
        />
        </Col>
        <Col xs='col-auto'>
          <span className='leaderboard-score'>{score.total}</span>
          pts
        </Col>
        <Col className='leaderboard-stats'>
          <strong>{user.name}</strong><br />
          {score.numAnswers} answered / {score.numQuestions} asked
        </Col>
      </Row>
    </CardBody>
  </Card>
)

export default LeaderboardItem
