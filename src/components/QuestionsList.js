import React, { Component } from 'react'
import QuestionsItem from './QuestionsItem'

class QuestionsList extends Component {
  render() {
    return (
      <div className="questions-list">
        <QuestionsItem />
      </div>
    );
  }
}

export default QuestionsList
