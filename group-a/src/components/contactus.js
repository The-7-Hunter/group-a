import React, { Component } from "react";
import { Card } from '@material-ui/core';

class contactus extends Component {
    render() {
        return (
            <Card className="section" >
            <img className="aboutimg" src="img/contact-us-icon.png" alt="" height="70" width="99" />
            <div className="contact">
            <h3 >تواصل معنا</h3>
            <h4>لا تتردد في ارسال البريد الإلكتروني </h4>
            <form>

            <label> * الأسم</label><br />
            <input type="text"  required="" /><br />

            <label>البريد الالكترونى</label><br />
            <input type="text" /><br />

            <label>العنوان</label><br />
            <input type="text" /><br />

            <label>الرسالة</label><br />
            <textarea cols="40" rows="3"></textarea><br /><br />

            <input type="submit" className="button" value="ارسال" /><br /><br />           </form>


            <h4>الهاتف &amp; البريد</h4>
            <p>+01 22112211</p>
            <p>fortydays@fortydays.com</p>

            <h4>ساعات العمل</h4>
            <p>من السبت الى الاثنين - 8am to 5pm</p>
            <p>الجمعه - مغلق</p>

            <h4>عنوان المكتب</h4>
            <p>السعودية - الرياض - حي النسيم - طريق عين بن ريم</p><br /><br />


            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-google"></a>
            <a href="#" className="fa fa-linkedin"></a>


            </div>
            </Card>
            );
    }
}
export default contactus;

