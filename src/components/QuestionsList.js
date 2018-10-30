import React, { Component } from 'react'
import { TabContent, TabPane } from 'reactstrap'
import QuestionsItem from './QuestionsItem'

class QuestionsList extends Component {
  render() {
    return (
      <TabContent activeTab='1' className="questions-list">
        <TabPane tabId='1'>
          <QuestionsItem />
        </TabPane>
      </TabContent>
    );
  }
}

export default QuestionsList
