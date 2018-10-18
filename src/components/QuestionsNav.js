import React, { Component } from 'react'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col } from 'reactstrap'
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
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">Unanswered Questions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Answered Questions</a>
        </li>
      </ul>
    )
  }
}

export default QuestionsNav
