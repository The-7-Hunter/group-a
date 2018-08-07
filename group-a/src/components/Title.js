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
        <div id="header" className="section">
          <img alt="" class="img-circle" src="http://bestvoyage.in/wp-content/uploads/profile.png" />
          <p>Nawaf Alharby</p>
        </div>
        <center>

      <Typography variant="display2">
          Hello again, I made some modifecations on the page, now you can navigate through the 
          buttons below, Enjoy :)
        </Typography>
        <br/>
        <br/>
        <br/>
      <Card className={classes.Card}>
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
        </Card>
        </center>
    </div>
    );
  }
}
export default withStyles(styles)(Title);
