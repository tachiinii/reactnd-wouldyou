import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TabContent, TabPane } from 'reactstrap'
import QuestionsItem from './QuestionsItem'

class QuestionsList extends Component {

  render() {
    const { answered, unanswered, questions, activeTab } = this.props

    return (
      <TabContent activeTab={activeTab} className="questions-list">
        <TabPane tabId='1'>
          {unanswered.map((qid) => (
            <QuestionsItem question={questions[qid]} key={qid} />
          ))}
        </TabPane>
        <TabPane tabId='2'>
          {answered.map((qid) => (
            <QuestionsItem question={questions[qid]} key={qid} />
          ))}
        </TabPane>
      </TabContent>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  const answered = Object.keys(questions).filter(qid => qid in users[authedUser].answers)
  const unanswered = Object.keys(questions).filter(qid => !(qid in users[authedUser].answers))

  return {
    answered,
    unanswered,
    questions,
  }
}

export default connect(mapStateToProps)(QuestionsList)
