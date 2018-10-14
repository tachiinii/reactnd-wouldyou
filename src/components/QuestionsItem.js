import React, { Component } from 'react'
import QuestionsItemUser from './QuestionsItemUser'
import QuestionsItemQuestion from './QuestionsItemQuestion'

class QuestionsItem extends Component {
  render() {
    return (
      <div className="questions-item">
        <QuestionsItemUser />
        <QuestionsItemQuestion />
      </div>
    );
  }
}

export default QuestionsItem
