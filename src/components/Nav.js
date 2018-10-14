import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className='nav site-nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
        </ul>

        <ul>
          <li>
            Hi Colen Wilson
          </li>
          <li>
            <NavLink to='/login' activeClassName='active'>
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav
