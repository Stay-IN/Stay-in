import React, { Component } from 'react';
import {
  Typography,
  AppBar,
  Toolbar,
  withStyles,
  Button
} from '@material-ui/core';

import style from './style';
import { AuthServices } from 'Services';
import { Link } from 'react-router-dom';

class Layout extends Component {
  handleLogout = () => {
    AuthServices.logout();
  };

  render() {
    const { classes, title } = this.props;
    return (
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar className={classes.navigationBar}>
          <Typography className={classes.title} variant="h6">
            {title || 'STAY IN'}
          </Typography>
          {AuthServices.isAuthenticated() && (
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button
                onClick={this.handleLogout}
                variant="contained"
                color="secondary"
              >
                Logout
              </Button>
            </Link>
          )}
          {!AuthServices.isAuthenticated() && (
            <div>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button
                  className={classes.buttontitle}
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
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(style)(Layout);
