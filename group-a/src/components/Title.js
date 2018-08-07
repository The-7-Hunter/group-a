import React, { Component } from "react";
import {Button, Card, withStyles, Typography} from '@material-ui/core';
import { NavLink } from "react-router-dom";

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      width: 250,
      height: 70,
      backgroundColor: "#151616",
    },
  Card:{
    backgroundColor: "#bec0c4",
  }
  });

class Title extends Component{
 render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <center>
      <Card className={classes.Card}>

      Hey There
        </Card>
        </center>
    </div>
    );
  }
}
export default withStyles(styles)(Title);

/*
<NavLink to="/components/aboutMe" style={{ textDecoration: 'none' }}>
<Button variant="contained" size="large" color="primary" className={classes.button}>
    Persional Info
  </Button>
  </NavLink>
  <NavLink to="/components/mySkills" style={{ textDecoration: 'none' }}>
<Button variant="contained" size="large" color="primary" className={classes.button}>
    My Skills
  </Button>
  </NavLink>
  <NavLink to="/components/contactMe" style={{ textDecoration: 'none' }}>
<Button variant="contained" size="large" color="primary" className={classes.button}>
    Contact Me
  </Button>
  </NavLink>
  */