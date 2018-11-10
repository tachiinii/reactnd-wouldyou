import React from 'react'
import {
  Nav,
  NavItem,
  NavLink,
  Badge
} from 'reactstrap'
import classnames from 'classnames'

const QuestionsNav = ({ activeTab, onToggle, unansweredCount }) => (
  <Nav tabs className='card-header-tabs'>
    <NavItem>
      <NavLink
        className={classnames({ active: activeTab === '1'})}
        onClick={() => {onToggle('1')}}
      >
        Unanswered Questions <Badge color='primary'>{unansweredCount}</Badge>
    </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={classnames({ active: activeTab === '2'})}
        onClick={() => {onToggle('2')}}
      >
        Answered Questions
      </NavLink>
    </NavItem>
  </Nav>
)

export default QuestionsNav
