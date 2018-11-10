import React from 'react'
import { TabContent, TabPane } from 'reactstrap'
import QuestionsItem from './QuestionsItem'

const QuestionsList = ({ answered, unanswered, questions, activeTab }) => (
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
)

export default QuestionsList
