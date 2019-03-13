import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css'
import Login from './components/Login'
import Lists from './components/Lists'
import List from './components/List'
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
  render() {
    return (
        <div className="App">
          <p>Hello World</p> 
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/tabs" component={Lists} />
        </div>
    );
  }
}

export default App;
