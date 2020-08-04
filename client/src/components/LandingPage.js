import React from 'react';
import '/Users/johnchen/appAcademy/AppAcademy/16weekReactProject/trella/client/src/styles/landingPage.css'
import { Button } from '@material-ui/core';

const splash = require('../assets/loginSplash.svg')

function LandingPage () {


  return (
    <>
    <div id="landing_nav_container">
      <div className="landing_nav_items">
        <div>
          <h2 id="nav_text">Trella</h2>
        </div>
        <div id="nav_buttons">
          <Button variant="outlined" color="primary" size="small" style={{ backgroundColor:"#366FC3", color:"white"}}>Log In</Button>
          <Button variant="contained" color="primary" size="small" style={{ backgroundColor:"white", color:"#366FC3"}}>Sign Up</Button>
        </div>
      </div>
    </div>

    <div id="landing_splash_container">
      <div id="landing_splash_items">
        <div id="landing_splash_text">
          <h2 color="white">Trello lets you work more collaboratively and get more done.</h2>
          <h3>Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</h3>
        </div>
        <div id="landing_splash_image">
          <img src={splash} alt={''} height="100%" />
        </div>
        <div id="landing_splash_signup">

        </div>
      </div>
    </div>

  </>
  )
}

export default LandingPage
