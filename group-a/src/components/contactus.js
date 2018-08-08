import React, { Component } from "react";
import { Card, withStyles, Button } from '@material-ui/core';


const styles = theme => ({
    Card:{
        maxwidth:200,
        margin: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
        width: 350,
        backgroundColor: "#fff",
        color:"#555",
        justifyContent: "center"
      },
      bkground:{
        backgroundColor: "#754b4b"
    },
});
class contactus extends Component {
        render() {
            const {classes} =this.props;
        return (
            <div className={classes.bkground}>
            <center>
            <img className="aboutimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/High-contrast-mail-mark-unread.svg/1024px-High-contrast-mail-mark-unread.svg.png" height="100" width="100" />
            <div className="contact">
            <Card className="section" >
            <h3 className="cent">تواصل معنا</h3>
            <h4 className="cent">لا تتردد في ارسال البريد الإلكتروني </h4>
            <form>

            <label> * الأسم</label><br />
            <input type="text"  required="" /><br />

            <label>البريد الالكترونى</label><br />
            <input type="text" /><br />

            <label>العنوان</label><br />
            <input type="text" /><br />

            <label>الرسالة</label><br />
            <textarea cols="49" rows="4"></textarea><br /><br />

             <Button variant="contained" size="large"  className={classes.button}>
                إرسال
            </Button>
                <br /><br /></form>
                </Card>
            </div>
            </center>
            <Card>
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
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-google"></a>
            <a href="#" className="fa fa-linkedin"></a>
            </center>
            </div>

            </Card>
            </div>
            );
    }
}
export default withStyles(styles)(contactus);

