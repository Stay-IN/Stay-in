import React, { Component } from 'react';
import {
  Typography,
  Toolbar,
  AppBar,
  withStyles,
  List,
  ListItem
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import style from './style';

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.footerBar} position="static">
        <Toolbar className={classes.navigationBar}>
          <Container maxWidth="lg">
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="http://localhost:3000/addhotel"
                    className={classes.block}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register your Hotel
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkr-footer"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="http://blog.creative-tim.com/?ref=mkr-footer"
                    className={classes.block}
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkr-footer"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              className={classes.footerTypo}
            >
              Made With &#10084;
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(style)(Layout);
