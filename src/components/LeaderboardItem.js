import React, { Component } from 'react'
import { Card, CardBody, Row, Col } from 'reactstrap'

class LeaderboardItem extends Component {
  render() {
    return (
      <Card color='primary' outline className='leaderboard-item'>
        <CardBody>
          <Row>
            <Col xs='1' className='score'>10</Col>
            <Col xs='1'>
            <img src='' className='' />
            </Col>
            <Col xs='10' className='stats'>
              <strong>Colen Wilson</strong><br />
              3 answered / 7 asked
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default LeaderboardItem
