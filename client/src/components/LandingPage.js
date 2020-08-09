import React, { useState } from 'react';
import '/Users/johnchen/appAcademy/AppAcademy/16weekReactProject/trella/client/src/styles/landingPage.css'
import { Button, TextField } from '@material-ui/core';
import { NavLink } from 'react-router-dom'
import logo from '../assets/textlogo2.png'

const splash = require('../assets/loginSplash.svg')

function LandingPage () {
  const [email, setEmail] = useState('')


  return (
    <>
    <div id="landing_nav_container">
      <div className="landing_nav_items">
        <div>
          <img src={logo} alt="" style={{height:90, marginLeft:5}}/>
        </div>
        <div id="nav_buttons">
        <NavLink to="/login" style={{ textDecoration:"none"}}>
          <Button variant="outlined" color="primary" size="small" style={{ backgroundColor:"#366FC3", color:"white", border: "none"}}>Log In</Button>
          </NavLink>
          <NavLink to="/signup" style={{ textDecoration:"none"}}>
          <Button variant="contained" color="primary" size="small" style={{ backgroundColor:"white", color:"#366FC3"}}>Sign Up</Button>
          </NavLink>
        </div>
      </div>
    </div>

    <div id="landing_splash_container">
      <div id="landing_splash_items">
        <div id="landing_splash_text">
          <h2 id="landing_splash_title">Trella lets you work more collaboratively and get more done.</h2>
          <h3>Trella’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</h3>
        </div>
        <div id="landing_splash_image">
          <img src={splash} alt={''} height="100%" />
        </div>
      </div>
      <div id="landing_newUserSignup">
        <div id="landing_splash_signup">
          <TextField
          variant="standard"
          label="Email"
          size="small"
          onChange={(e) => {setEmail(e.target.value)} }
          ></TextField>
        </div>
        <div>
          <NavLink
          to={{
            pathname:"/signup",
            state:{ landingEmail: email }

          }}
          style={{ textDecoration:"none"}}>
          <Button variant="contained" color="primary" size="small" style={{ backgroundColor:"green", color:"white"}}>Sign Up - Its Free</Button>
          </NavLink>
        </div>
      </div>

      </div>



  </>
  )
}

export default LandingPage
