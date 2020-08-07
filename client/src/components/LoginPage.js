import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../store/auth';
import SignupElement from './SignupElement';

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

// need sign in authentication
  const { needSignIn } = useSelector(state => state.auth)


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  }

  if (needSignIn === false) {
    return <Redirect to="/Dashboard" />
  }

  return (
    <>
    <div id="signup_container">
      <div id="signup_box">
        <h5 id="signup_title">
          Login To Your Account
        </h5>

        <form onSubmit={handleSubmit}>
        <div id="signup_entry">
            <TextField
            variant="outlined"
            label="Email"
            size="small"
            value={email}
            onChange={e => setEmail(e.target.value)}
            ></TextField>
            <TextField
            variant="outlined"
            label="Password"
            size="small"
            value={password}
            onChange={e => setPassword(e.target.value)}
            ></TextField>
            <Button type="submit" variant="contained" color="primary" size="small" style={{ backgroundColor:"white", color:"#366FC3"}}>Login</Button>
            <p>By Logging in, you confirm that you've read and accepted our Terms of Service and Privacy Policy.</p>
            </div>
          </form>
          <SignupElement />

      </div>

    </div>
    </>
  )
}

export default Login
