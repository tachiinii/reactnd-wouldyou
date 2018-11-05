import React, { Component } from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import QuestionsList from './QuestionsList'
import QuestionsNav from './QuestionsNav'

class Questions extends Component {
  state = {
    activeTab: '1'
  }

  toggle = this.toggle.bind(this);

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="questions">
        <h2 className='page-title'>Questions</h2>
        <Card>
          <CardHeader>
            <QuestionsNav activeTab={this.state.activeTab} onToggle={this.toggle} />
          </CardHeader>
          <CardBody>
            <QuestionsList activeTab={this.state.activeTab} />
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Questions
