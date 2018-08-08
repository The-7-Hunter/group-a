import React, { Component } from "react";
import { Card, withStyles, Button,TextField } from '@material-ui/core';


const styles = theme => ({
    card: {
        maxWidth: 800
      },
      media: {
        height: 10,
        paddingTop: "50.25%" // 16:9
      },
      bkground: {
        backgroundColor: "#87e8e8ff"
      },
      button: {
        margin: theme.spacing.unit,
        width: 200,
        backgroundColor: "#343434ff",
        color: "#ffffff",
    },
});
class contactus extends Component {
        render() {
            const {classes} =this.props;
        return (
            <center>
            <div className={classes.bkground}>
            <br/>
                <br/>
              <Card className={classes.card} dir="rtl">
             
                <img className="aboutimg" src="img/contact-us-icon.png" />
                <div className="contact">
                  <h3 className="cent">تواصل معنا</h3>
                  <h4 className="cent">لا تتردد في ارسال البريد الإلكتروني </h4>
                  <form>
      
                  <TextField
                                    dir="rtl"
                                 
                                    placeholder="الإسم"
                                /><br />
      
      <TextField
                                    dir="rtl"
                                    placeholder="البريد الإلكتروني"
                                /><br />
      
      <TextField
                                    dir="rtl"
                                    
                                    placeholder="العنوان"
                                /><br />
      
      <TextField
                                    dir="rtl"
                                    placeholder="الرسالة"
                                /><br /><br/>
                    <Button variant="contained" size="large" className={classes.button}>
                      إرسال
                  </Button>
                    <br /><br /></form>
                </div> 
                <div className="contact">
                  <h4 className="cent">الهاتف &amp; البريد</h4>
                  <p className="cent">+01 22112211</p>
                  <p className="cent">fortydays@fortydays.com</p>
      
                  <h4 className="cent">ساعات العمل</h4>
                  <p className="cent">من السبت الى الاثنين - 8am to 5pm</p>
                  <p className="cent">الجمعه - مغلق</p>
      
                  <h4 className="cent">عنوان المكتب</h4>
                  <p className="cent">السعودية - الرياض - حي النسيم - طريق عين بن ريم</p><br /><br />

                <center>
                  <a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-google"></a>
                  <a href="#" className="fa fa-linkedin"></a>
                </center>
                </div>
      
              </Card>
              <br/>
           <br/>
            </div>
          </center>
            );
    }
}
export default withStyles(styles)(contactus);

