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
  media: {
    height: 10,
    paddingTop: '50.25%', // 16:9
  },
  adminbtn:{
    width:210,
    justifyContent:"right"
  }
  });

class Title extends Component{
 render() {
    const { classes } = this.props;
    return (
      <div className="container">
   
      <Card>
      <AppBar position="static" color="default">
        <Toolbar>
    <img className={classes.img} src="https://preview.ibb.co/hXqdbK/cloud_logo.png"/>
          <Typography variant="display2" color="#ffffff">
        (Cloud Systems)  أنظمة غيمة
        <NavLink to="/components/admin" style={{ textDecoration: 'none' }}>
        <Button className={classes.adminbtn} color="primary">
        عضو من أعضاء المؤسسة؟ إضغط هنا
        </Button>
        </NavLink>
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
          المهام
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

