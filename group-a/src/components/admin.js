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
  });



  class admin extends Component{
    render() {
       const { classes } = this.props;
       return (
         <div className="container">
      
         <Card>

           </Card>
        
       </div>
       );
     }
   }
   export default withStyles(styles)(admin);