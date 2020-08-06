import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Login from './components/LoginPage';
import NewUser from './components/NewUser';
import dashboard from './components/dashboard';


export default () => {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={NewUser} />
      <Route path="/landingPage" exact component={Navbar} />
      <Route path="/dashboard" exact component={dashboard} />
    </Switch>
  )
}
