import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';


export default () => {
  return (
    <Switch>
      <Route path="/" exact component={LoginPage} />
      <Route path="/landingPage" component={Navbar} />
    </Switch>
  )
}
