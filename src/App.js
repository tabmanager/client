import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import Lists from './components/Lists'
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello World</p>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/tabs" component={Lists} />
      </div>
    )
  }
}

export default App
