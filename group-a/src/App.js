import React, { Component } from 'react';
import Title from './components/Title';
import aboutus from './components/aboutus';
import contactus from './components/contactus';
import home from './components/home';
import missions from './components/missions';
import sumtrain from './components/sumtrain';
import { Route } from "react-router-dom";
import './App.css';
import admin from './components/admin';


class App extends Component {
  render(){
  return(
  <div className="App">
    <Title/>
    <Route  path="/components/aboutus" component={aboutus}/>
    <Route  path="/components/contactus" component={contactus}/>
    <Route  path="/components/home" component={home}/>
    <Route  path="/components/missions" component={missions}/>
    <Route  path="/components/sumtrain" component={sumtrain}/>
    <Route  path="/components/admin" component={admin}/>


          
  </div>
  );}
}
export default App;
