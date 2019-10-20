import React from 'react';
import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Event from './pages/Event';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component={Home}/>
        <Route path = '/Event' component={Event}/>
        <Route exact path = '/User' component={User}/>                
      </Switch>
    </div>
  );
}

export default App;
