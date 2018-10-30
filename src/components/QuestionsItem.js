import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap'
import QuestionsItemUser from './QuestionsItemUser'
import QuestionsItemQuestion from './QuestionsItemQuestion'

class QuestionsItem extends Component {
  render() {
    return (
      <Card color='primary' outline className="questions-item">
        <CardBody>
          <div className='row'>
            <div className='col-auto'>
              <QuestionsItemUser />
            </div>
            <div className='col'>
              <QuestionsItemQuestion />
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default QuestionsItem
