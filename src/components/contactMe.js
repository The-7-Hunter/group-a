import React, { Component } from "react";
import { Card } from '@material-ui/core';

class contactMe extends Component {
    render() {
        return (
            <Card className="section" id="contacts" >
            <h1>
                <span>Contact Me at</span>
            </h1>
            <div>
                <a href="https://sa.linkedin.com/in/nawaf-harbi-034a3857" target="_blank">
                    <img alt="Linked in" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" />
                </a>
                <a href="https://twitter.com/nawaf_7_alharby">
                    <img alt="Twitter" src="https://imageog.flaticon.com/icons/png/512/23/23931.png" />
                </a>
                <a href="https://github.com/The-7-Hunter"  target="_blank">
                    <img alt="Github" src="https://image.flaticon.com/icons/svg/25/25231.svg" />
                </a>
            </div>
          </Card>
        );
    }
}
export default contactMe;

