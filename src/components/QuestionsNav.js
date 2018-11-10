import React, { Component } from 'react'
import {
  Nav,
  NavItem,
  NavLink,
  Badge
} from 'reactstrap'
import classnames from 'classnames'

class QuestionsNav extends Component {
  render() {
    return (
      <Nav tabs className='card-header-tabs'>
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.activeTab === '1'})}
            onClick={() => {this.props.onToggle('1')}}
          >
            Unanswered Questions <Badge color='primary'>{this.props.unansweredCount}</Badge>
        </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.props.activeTab === '2'})}
            onClick={() => {this.props.onToggle('2')}}
          >
            Answered Questions
          </NavLink>
        </NavItem>
      </Nav>
    )
  }
}

export default QuestionsNav
