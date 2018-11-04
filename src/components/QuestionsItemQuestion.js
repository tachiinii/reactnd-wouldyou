import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class QuestionsItemQuestion extends Component {

  getTeaser = (str) => {
    const max = 20
    if (str.length <= max)
      return str
    else
      return str.substr(0, str.lastIndexOf(' ', max)) + '...'
  }

  render() {
    return (
      <div className='questions-item-question'>
        <h4 className='question-intro'>Would you rather?</h4>
        <p>
        {this.getTeaser(this.props.text)} OR
        </p>
        <button
          className='btn btn-outline-primary'
          onClick={() => this.props.history.push(`/question/${this.props.id}`)}
        >
          View Question
        </button>
      </div>
    );
  }
}

export default withRouter(QuestionsItemQuestion)
