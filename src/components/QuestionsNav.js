import React, { Component } from 'react'
import {
  Nav,
  NavItem,
  NavLink } from 'reactstrap'
import classnames from 'classnames'

class QuestionsNav extends Component {

  toggle = this.toggle.bind(this);
  state = {
    activeTab: '1'
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <Nav tabs className='card-header-tabs'>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '1'})}
            onClick={() => {this.toggle('1');}}
          >
            Unanswered Questions
        </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '2'})}
            onClick={() => {this.toggle('2');}}
          >
            Answered Questions
          </NavLink>
        </NavItem>
      </Nav>
    )
  }
}

export default QuestionsNav
