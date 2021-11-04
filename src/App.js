import './App.css';

import React, { Component } from 'react'
import Home from './views/Home';
import Detail from './views/Detail';
import SignIn from './views/Signin';
import SignUp from './views/Signup';
import Booking from './views/Booking'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { connect } from 'react-redux';
import { fetchMe } from './store/action/auth';
import { AuthRoute, PrivateRoute } from './HOCs/Route';

class App extends Component {

  tokenCyberSoft = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjciLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDc3MzQ0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0Nzg4MjAwMH0.adTs_7mDpRC34Pwdsgpu-EUnD_gW9Z8REnUnl05QysA"

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/detail/:id" component={Detail}/>
          <AuthRoute path="/signin" redirectPath="/" component={SignIn}/>
          <AuthRoute path="/signup" redirectPath="/" component={SignUp}/>
          <Route path="/booking" component={Booking}/>
          <PrivateRoute path="/" redirectPath="/signin" component={Home}/>
        </Switch>
      </BrowserRouter>
    )
  }

  componentDidMount() {
    localStorage.setItem("tokenCyberSoft", this.tokenCyberSoft);
    const tokenSignIn = localStorage.getItem("tokenSignIn");
    if(tokenSignIn) {
      this.props.dispatch(fetchMe);
    }
  }
}


export default connect()(App);
