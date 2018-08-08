import React, { Component } from "react";
import {Button, Card, withStyles, Typography,AppBar,Toolbar, CardMedia,} from '@material-ui/core';
import { NavLink } from "react-router-dom";

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      width: 150,
      backgroundColor: "#343434ff",
      color:"#c6c6c6",
      justifyContent: "flex-end"
    },
  img:{
    margin: theme.spacing.unit,
    width:200,
    height:150,
  },
  media: {
    height: 10,
    paddingTop: '50.25%', // 16:9
  },
  adminbtn:{
    width:210,
    justifyContent:"right"
  },
  bkground:{
    backgroundColor:"#ffffff",
  
  },
  Typography:{
    color:"#ffffff",
  },
  btnheader:{
    backgroundColor:"#4e4e4eff"
  }
  });

class Title extends Component{
 render() {
    const { classes } = this.props;
    return (
      <div className={classes.bkground}>
   
      <Card>
      <AppBar className={classes.bkground} position="static">
        <Toolbar className="backgr">      
    <img className={classes.img} src="https://preview.ibb.co/kjtUGK/logo.png"/>
          <Typography variant="display2"color="textPrimary" >
        (Cloud Systems)  أنظمة غيمة
        <NavLink to="/components/admin" style={{ textDecoration: 'none' }}>
        <Button className={classes.adminbtn} color="primary">
        عضو من أعضاء المؤسسة؟ إضغط هنا
        </Button>
        </NavLink>
              </Typography>
          </Toolbar>
          <center>
           <div className={classes.btnheader}> 
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
        </div>
        </center>
        
      </AppBar>
        </Card>
     
    </div>
    );
  }
}
export default withStyles(styles)(Title);

