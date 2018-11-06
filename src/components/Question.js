import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import PollResults from './PollResults'
import QuestionNotFound from './QuestionNotFound'

class Question extends Component {
  render() {
    const { qid, user, question } = this.props

    if (question === undefined)
      return (<QuestionNotFound />)
    else if (question.id in user.answers)
      return (<PollResults />)
    else
      return (<Poll />)
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { qid } = props.match.params
console.log('Question: ', qid)
  return {
    user: users[authedUser],
    question: questions[qid],
  }
}

export default connect(mapStateToProps)(Question)
