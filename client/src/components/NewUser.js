import React from 'react';
import SignupElement from './SignupElement';
import '../styles/newuser.css'
import { Button, TextField } from '@material-ui/core';

function NewUser () {


  return (
    <>

    <div id="signup_container">
      <div id="signup_box">
        <h5 id="signup_title">
          Sign up for your account
        </h5>
        <div id="signup_entry">
          <TextField
            variant="outlined"
            label="Name"
            size="small"
            >Testing</TextField>
            <TextField
            variant="outlined"
            label="Email"
            size="small"
            >Testing</TextField>
            <TextField
            variant="outlined"
            label="Password"
            size="small"
            >Testing</TextField>
            <Button variant="contained" color="primary" size="small" style={{ backgroundColor:"white", color:"#366FC3"}}>Sign Up</Button>
            <p>By signing up, you confirm that you've read and accepted our Terms of Service and Privacy Policy.</p>
          </div>
      </div>
    </div>
    <SignupElement />
    </>
  )
}

export default NewUser
