import React, { Component } from 'react';
import { withStyles, Typography, Grid, Link } from '@material-ui/core';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';

import style from './style';

import { AuthServices } from 'Services';

class Layout extends Component {
  handleLogout = () => {
    AuthServices.logout();
    this.props.history.push('/managerlogin');
  };
  handleLogin = () => {
    this.props.history.push('/managerlogin');
  };

  handleSignup = () => {
    this.props.history.push('/managersignup');
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.hello}>
          <Grid container md={10}>
            <Grid item>
              <div className={classes.mainFeaturedPostContent}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  Your request was successfully submitted!
                </Typography>
                <SentimentSatisfiedAltIcon style={{ fontSize: 60 }} />
                <Typography variant="h5" color="inherit" paragraph>
                  Thanks for registering with Stayin.
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  Stayin customer services representative will contact you
                  shortly on the number provided to confirm your request.
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  To explore more go to
                </Typography>
                <Link variant="subtitle1" href="http://stayin.herokuapp.com/">
                  http://stayin.herokuapp.com/
                </Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(Layout);
