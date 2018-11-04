import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TabContent, TabPane } from 'reactstrap'
import QuestionsItem from './QuestionsItem'

class QuestionsList extends Component {
  render() {
    const { questions } = this.props

    return (
      <TabContent activeTab='1' className="questions-list">
        <TabPane tabId='1'>
          <h3>Answered</h3>
          {Object.keys(questions).map((qid) => (
            <QuestionsItem question={questions[qid]} key={qid} />
          ))}
        </TabPane>
        <TabPane tabId='2'>
          <h3>Answered</h3>
        </TabPane>
      </TabContent>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    questions,
    users,
  }
}

export default connect(mapStateToProps)(QuestionsList)
