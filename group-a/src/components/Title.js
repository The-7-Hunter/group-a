import React, { Component } from "react";
import {Button, Card, withStyles, Typography,AppBar,Toolbar} from '@material-ui/core';
import { NavLink } from "react-router-dom";

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      width: 150,
      backgroundColor: "#151616",
      color:"#ffffff"
    },
  Card:{
    backgroundColor: "#bec0c4",
  },
  img:{
    margin: theme.spacing.unit,
    width:100,
  }
  });

class Title extends Component{
 render() {
    const { classes } = this.props;
    return (
      <div className="container">
   
      <Card className={classes.Card}>
      <AppBar position="static" color="default">
        <Toolbar>
        <img alt="" className={classes.img}  src="http://bestvoyage.in/wp-content/uploads/profile.png" />
    
          <Typography variant="display2" color="inherit">
          أنظمة غيمة
          </Typography>
          </Toolbar>
          <center>
            <NavLink to="/components/home" style={{ textDecoration: 'none' }}>
        <Button variant="contained" size="large" className={classes.button}>
          الرئيسية
        </Button>
        </NavLink>

        <NavLink to="/components/sumtrain" style={{ textDecoration: 'none' }}>
        <Button variant="contained" size="large"  className={classes.button}>
          برنامج التدريب 
        </Button>
        </NavLink>

        <NavLink to="/components/missions" style={{ textDecoration: 'none' }}>
        <Button variant="contained" size="large"  className={classes.button}>
          المهمام
        </Button>
        </NavLink>

        <NavLink to="/components/aboutus" style={{ textDecoration: 'none' }}>
        <Button variant="contained" size="large"  className={classes.button}>
          من نحن ؟
        </Button>
        </NavLink>
        
        <NavLink to="/components/contactus" style={{ textDecoration: 'none' }}>
        <Button variant="contained" size="large" className={classes.button}>
          تواصل معنا
        </Button>
        </NavLink>
        </center>
      </AppBar>
        </Card>
     
    </div>
    );
  }
}
export default withStyles(styles)(Title);

