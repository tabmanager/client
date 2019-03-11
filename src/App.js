import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Login from './components/Login'
import Lists from './components/Lists'
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
  render() {
    return (
        <div className="App">
          Hello World
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Lists} />
        </div>
    );
  }
}

export default App;
 