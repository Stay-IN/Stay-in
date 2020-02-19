import React, { Component } from 'react';
import { AuthServices } from 'Services';
import { AccountCircle } from '@material-ui/icons';
import LockIcon from '@material-ui/icons/Lock';

import {
  withStyles,
  InputAdornment,
  TextField,
  Button,
  Container,
  Grid,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography
} from '@material-ui/core';
import style from './style';
import { Snackbar } from 'Components';
import axios from 'axios';
import Config from 'Config';

class Layout extends Component {
  state = {
    username: '',
    password: '',
    isOpen: false,
    message: '',
    variant: 'error',
    isChecking: false,
    open: false,
    Fusername: '',
    Fpassword: ''
  };
  onClickLogin = async () => {
    this.setState({ isChecking: true });
    const { username, password } = this.state;
    const response = await AuthServices.login(username, password);
    if (!response.success) {
      const message = response.data.message;
      this.setState({
        message: message[0],
        isOpen: true,
        variant: 'error'
      });
    } else {
      this.props.history.push('/');
      window.location.reload();
    }
    this.setState({
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      isChecking: false
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose1 = () => {
    this.setState({ open: false });
  };

  handleClose = async () => {
    const username = this.state.Fusername;
    const password = this.state.Fpassword;
    try {
      const response = await axios.post(`${Config.SERVER_URL}/user`, {
        username,
        password
      });
      const message = response.data.data.message;
      this.setState({
        message: message[0],
        isOpen: true,
        variant: 'error',
        Fusername: '',
        Fpassword: '',
        open: false
      });
    } catch (error) {
      this.setState({
        message: 'User does not exist',
        isOpen: true,
        variant: 'error',
        Fusername: '',
        Fpassword: ''
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { username, password, Fusername, Fpassword, open } = this.state;
    return (
      <div className={classes.container}>
        <Snackbar
          errorMessage={this.state.message}
          isOpen={this.state.isOpen}
          handleClose={() => this.setState({ isOpen: false })}
          variant={this.state.variant}
        />
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <img src="/images/boy.svg" alt="svgicon" height="150" width="150" />
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    AccountCircle
                    autoFocus
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    placeholder="Email"
                    name="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          style={{ color: '#1e90ff' }}
                        >
                          <AccountCircle />
                        </InputAdornment>
                      )
                    }}
                    value={username}
                    onChange={e => this.setState({ username: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    placeholder="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          style={{ color: '#1e90ff' }}
                        >
                          <LockIcon />
                        </InputAdornment>
                      )
                    }}
                    value={password}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </Grid>
              </Grid>
              <Dialog
                open={open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">
                  Forgot your password ?
                </DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    variant="outlined"
                    id="Fusername"
                    name="Fusername"
                    placeholder="Email Address"
                    type="email"
                    fullWidth
                    value={Fusername}
                    onChange={e => this.setState({ Fusername: e.target.value })}
                  />
                </DialogContent>
                <DialogContent>
                  <TextField
                    variant="outlined"
                    name="Fpassword"
                    id="Fpassword"
                    margin="dense"
                    placeholder="New password"
                    type="password"
                    fullWidth
                    value={Fpassword}
                    onChange={e => this.setState({ Fpassword: e.target.value })}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose1} color="primary">
                    Close
                  </Button>
                  <Button onClick={this.handleClose} color="primary">
                    Change
                  </Button>
                </DialogActions>
              </Dialog>

              <Button
                onClick={this.onClickLogin}
                variant="contained"
                color="primary"
                className={classes.button}
                fullWidth
                disabled={this.state.isChecking ? true : false}
              >
                {this.state.isChecking && <CircularProgress size={20} />}Login
              </Button>
              <Typography color="textSecondary" variant="body1">
                <Button
                  className={classes.signInButton}
                  color="primary"
                  onClick={this.handleClickOpen}
                  variant="contained"
                >
                  Forgot password
                </Button>
              </Typography>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default withStyles(style)(Layout);
