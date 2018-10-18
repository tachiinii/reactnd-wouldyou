import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink } from 'reactstrap'


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

  render() {
    return (
      <div>
        <Navbar className='justify-content-between' color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/add">New Question</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/leaderboard">Leaderboard</NavLink>
              </NavItem>
            </Nav>
            <div className='user-nav ml-auto'>
              <span className='navbar-text user-greeting'>Hi Colen Wilson</span>
              <button className='btn btn-outline-secondary'>Logout</button>
            </div>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default AppNavbar
