import React, { Component } from 'react'
import QuestionsItemUser from './QuestionsItemUser'
import QuestionsItemQuestion from './QuestionsItemQuestion'

class QuestionsItem extends Component {
  render() {
    return (
      <div className="card border-primary rounded questions-item">
        <div className='row'>
          <div className='col-auto'>
            <QuestionsItemUser />
          </div>
          <div className='col'>
            <QuestionsItemQuestion />
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionsItem
