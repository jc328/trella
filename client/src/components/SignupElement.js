import React from 'react';
import '../styles/signup.css'
const loginLeft = require('../assets/loginleft.png')
const loginRight = require('../assets/loginright.png')



function SignupElement () {

  return (
    <>
    <div id="login_images">
      <div id="login_image_left">
        <img src={loginLeft} alt={''} height="100%"  />
      </div>
      <div id="login_image_right">
        <img src={loginRight} alt={''} height="100%" />
      </div>
    </div>
    </>
  )
}

export default SignupElement
