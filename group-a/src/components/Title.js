import React, { Component } from "react";
import {Button, Card, withStyles, Typography,AppBar,Toolbar, CardMedia,} from '@material-ui/core';
import { NavLink } from "react-router-dom";

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      width: 150,
      backgroundColor: "#fff",
      color:"#555",
      justifyContent: "flex-end"
    },
  img:{
    margin: theme.spacing.unit,
    width:200,
    height:100,
    backgroundColor:"#ffffff"
  },
  Typography:{
    backgroundColor: "#888",
    color: "#888"
  },
  media: {
    height: 10,
    paddingTop: '50.25%', // 16:9
  },
  });

class Title extends Component{
 render() {
    const { classes } = this.props;
    return (
      <div className="container">
   
      <Card>
      <AppBar position="static">
        <Toolbar>
    <img className={classes.img} src="https://preview.ibb.co/hXqdbK/cloud_logo.png"/>
          <Typography variant="display2">
        (Cloud Systems)  أنظمة غيمة
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

