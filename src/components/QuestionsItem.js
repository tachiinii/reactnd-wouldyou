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
              <QuestionsItemUser author={this.props.question.author} />
            </div>
            <div className='col'>
              <QuestionsItemQuestion
                id={this.props.question.id}
                text={this.props.question.optionOne.text}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default QuestionsItem
