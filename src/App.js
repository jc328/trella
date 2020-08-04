import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Login from './components/LoginPage';
import SignupPage from './components/SignupPage';


export default () => {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignupPage} />
      <Route path="/landingPage" exact component={Navbar} />
    </Switch>
  )
}
