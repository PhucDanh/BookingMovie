import './App.css';

import React, { Component } from 'react'
import Home from './views/Home';
import Detail from './views/Detail';
import SignIn from './views/Signin';
import SignUp from './views/Signup';
import Booking from './views/Booking'
import { BrowserRouter, Switch, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/booking" component={Booking}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    )
  }
}


export default App;
