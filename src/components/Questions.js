import React, { Component } from 'react'
import { connect } from 'react-redux'
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
    const { answered, unanswered, questions } = this.props

    return (
      <div className="questions">
        <h2 className='page-title'>Questions</h2>
        <Card>
          <CardHeader>
            <QuestionsNav
              unansweredCount={unanswered.length}
              activeTab={this.state.activeTab}
              onToggle={this.toggle}
            />
          </CardHeader>
          <CardBody>
            <QuestionsList
              questions={questions}
              answered={answered}
              unanswered={unanswered}
              activeTab={this.state.activeTab}
            />
          </CardBody>
        </Card>
      </div>
    )
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

export default connect(mapStateToProps)(Questions)
