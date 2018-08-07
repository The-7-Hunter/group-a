import React, { Component } from 'react';
import Title from './components/Title';
import { Route } from "react-router-dom";
import './App.css';


class App extends Component {
  render(){
  return(
  <div className="App">
    <Title/>

    {/*<Route  path="/components/aboutMe" component={aboutMe}/>
    <Route  path="/components/mySkills" component={mySkills}/>
    <Route  path="/components/contactMe" component={contactMe}/>
  */}

          
  </div>
  );}
}
export default App;
