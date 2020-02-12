import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import { Button, Typography } from '@material-ui/core';
import { createBrowserHistory } from 'history';

import { AuthServices } from 'Services';

const history = createBrowserHistory();

export default class Navbar extends Component {
  handleLogout = () => {
    AuthServices.logout();
    history.push('/');
    window.location.reload();
  };

  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <Typography variant="h6">{'STAY IN'}</Typography>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            style={{ flexGrow: 1 }}
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
          {AuthServices.isAuthenticated() && (
            <Button
              onClick={this.handleLogout}
              variant="contained"
              color="secondary"
            >
              Logout
            </Button>
          )}
          {!AuthServices.isAuthenticated() && (
            <div>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button
                  style={{ marginRight: '10px' }}
                  variant="contained"
                  color="secondary"
                >
                  LOGIN
                </Button>
              </Link>
              <Link to="/signup" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="secondary">
                  SIGNUP
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    );
  }
}
