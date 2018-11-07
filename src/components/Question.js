import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import PollResults from './PollResults'
import QuestionNotFound from './QuestionNotFound'

class Question extends Component {
  render() {
    const { author, question, user } = this.props

    if (question === undefined)
      return (
        <QuestionNotFound />
      )
    else if (question.id in user.answers)
      return (
        <PollResults
          author={author}
          question={question}
          user={user}
        />)
    else
      return (
        <Poll
          author={author}
          question={question}
          user={user}
        />)
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { qid } = props.match.params
console.log('Question: ', qid)
  const question = questions[qid]
  return {
    user: users[authedUser],
    author: users[question.author],
    question: question,
  }
}

export default connect(mapStateToProps)(Question)
