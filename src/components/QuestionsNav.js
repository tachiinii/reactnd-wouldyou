import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class QuestionsNav extends Component {
  render() {
    return (
      <div className='nav questions-nav'>
        <ul>
          <li>
            <NavLink to='/' activeClassName='active'>
              Unanswered Questions
            </NavLink>
          </li>
          <li>
            <NavLink to='/' activeClassName='active'>
              Answered Questions
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default QuestionsNav
