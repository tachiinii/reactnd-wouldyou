import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class AppNavbar extends Component {

  toggle = this.toggle.bind(this);
  state = {
    isOpen: false
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout = (e) => {
    const { dispatch, history } = this.props
    dispatch(setAuthedUser(null))
    history.push('/')
  }

  render() {
    return (
      <div>
        <Navbar className='justify-content-between' color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to='/' exact className='nav-link' activeClassName='active'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/add' className='nav-link' activeClassName='active'>New Question</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/leaderboard' className='nav-link' activeClassName='active'>Leaderboard</NavLink>
              </NavItem>
            </Nav>
            <div className='user-nav ml-auto'>
              <span className='navbar-text user-greeting'>Hi {this.props.username}</span>
              <button
                className='btn btn-outline-secondary'
                onClick={this.handleLogout}
              >
                Logout
              </button>
            </div>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users}) {
  return {
    username: users[authedUser].name
  }
}

export default withRouter(connect(mapStateToProps)(AppNavbar))
