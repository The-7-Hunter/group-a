import React, { Component } from "react";
import {Button, Card, withStyles, Typography,CardContent, CardMedia,Grid,Paper} from '@material-ui/core';
import { NavLink } from "react-router-dom";

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      width: 150,
      backgroundColor: "#fff",
      color:"#555",
      justifyContent: "flex-end"
    },
    bkground:{
        backgroundColor: "#87e8e8ff"
    }
  });



  class admin extends Component{
    render() {
       const { classes } = this.props;
       return (
        <div className={classes.bkground}>
           <center>
           <br/>
           <br/>
           <br/>       
           <br/>
           <br/>
           <br/>     
        <Card className={classes.card} dir="rtl">
        <CardContent>

            <Typography variant="Title">
               أهلا بك عضو مؤسسة أنظمة غيمة لديك 34 مهمة مستلمة بإنتظار التصحيح و 1 مهمة يجب إرسالها
</Typography>
<Typography variant="Title">
                            لإستعراض المهمات وتصحيحها أنقر إستعراض المهمات
</Typography>
<Typography variant="Title">
               للبدء بإرسال المهمات أنقر إرسال مهمة
</Typography>

        </CardContent>

        <Button onClick={this.handleClickOpen} variant="contained" size="large" className={classes.button}>
           إرسال مهمة
</Button>


        <Button onClick={this.handleClickOpen1} variant="contained" size="large" className={classes.button}>

            إستعراض المهمات
</Button>

        <br />
        <br />
    </Card>
    </center>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
           <br/>
    </div>
       );
     }
   }
   export default withStyles(styles)(admin);