import React, { Component } from "react";
import { Card, LinearProgress } from '@material-ui/core';

class mySkills extends Component {
    state = {
        value1: 85,
        value2: 80,
        value3: 50,
        value4: 60,
        value5: 70,
        value6: 100,
        value7: 90,
        value8: 50,
    };
    render() {
        return (
            <Card className="section">
                <h1>
                    <span>My Skills</span>
                </h1>
                <ul>
                    <li>HTML
                  <br />
                        <LinearProgress variant="determinate" value={this.state.value1} />
                    </li>
                    <br />

                    <li>CSS
                  <br />
                        <LinearProgress variant="determinate" value={this.state.value2} />
                    </li>
                    <br />

                    <li>PHP-Laravel
                  <br />
                        <LinearProgress variant="determinate" value={this.state.value3} />
                    </li>
                    <br />

                    <li>JS
                  <br />
                        <LinearProgress variant="determinate" value={this.state.value4} />
                    </li>
                    <br />

                    <li>React.js
                  <br />
                        <LinearProgress variant="determinate" value={this.state.value5} />
                    </li>
                    <br />
                </ul>
                
                <h1>
                    <span>Languages</span>
                </h1>
                <ul>
                    <li>Arabic
                  <br />
                        <LinearProgress variant="determinate" value={this.state.value6} />
                    </li>
                    <br />

                    <li>English
                  <br />
                        <LinearProgress variant="determinate" value={this.state.value7} />
                    </li>
                    <br />

                    <li>French
                  <br />
                        <LinearProgress variant="determinate" value={this.state.value8} />
                    </li>
                    <br />
                </ul>


            </Card>
        );
    }
}
export default mySkills;

