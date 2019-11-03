import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Event from './pages/Event';
import User from './pages/User';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch className=".container">
          <Route exact path = '/' component={Home}/>
          <Route path = '/Event/:eventid' component={Event}/>
          <Route exact path = '/User' component={User}/>                
      </Switch>
      <Footer/>      
    </div>
  );
}

export default App;
