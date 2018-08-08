import React, { Component } from "react";
import { Card } from '@material-ui/core';

class aboutMe extends Component {
    render() {
        return (
            <Card className="section">
                <h1>
                    <span>Personal Info</span>
                </h1>
                <p> Hey Everyone ! nice to have you here in my web page </p>
                <p>here you find a overview about me, so much for an overview haha anyway I am a computer since student</p>
                <p> at Qassim University at the 9th level (my final year before graduation), I strongly </p>
                <p>believe that anyone can atchive anything as long as he never stop believing in himeself. </p>
                <h2> About me: </h2>
                <p> Full Name: Nawaf Saud Alharby. </p>
                <p> Age: 23.</p>
                <p>Phone: 966536298611</p>
                <p>Email: Nawafhunter@gmail.com</p>
                <p>Hobbies: Playing football, swimming, Video Games.</p>
                <p>Hello I'm sulaiman playing with this code</p>
            </Card>
        );
    }
}

export default aboutMe;