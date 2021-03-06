import React, { useState } from 'react';
import SignupElement from './SignupElement';
import '../styles/newuser.css'
import { Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { signUp } from '../store/auth';
// import { Redirect } from 'react-router-dom';

function NewUser (props) {
  // console.log()
  var receiveEmail= ''
  if (props.location.state) {
    receiveEmail = props.location.state.landingEmail
  }
  console.log(receiveEmail)
  const [email, setEmail] = useState(receiveEmail);
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  // const { needSignIn } = useSelector(state => state.auth)

  const handleSubmit = async (e) => {

    e.preventDefault();
    dispatch(signUp(name, email, password));
  }
  // Adjust action after Sign In
  // if (!needSignIn) {
  //   return <Redirect to="/login" />
  // }

  return (
    <>
    <div id="signup_container" style={{zIndex: 1}}>
      <div id="signup_box">
        <h5 id="signup_title">
          Sign up for your account
        </h5>
        <form onSubmit={handleSubmit}>
        <div id="signup_entry">
          <TextField
            variant="outlined"
            label="Name"
            size="small"
            value={name}
            onChange={e => setName(e.target.value)}
            >Testing</TextField>
            <TextField
            variant="outlined"
            label="Email"
            size="small"
            value={email}
            onChange={e => setEmail(e.target.value)}
            >Testing</TextField>
            <TextField
            variant="outlined"
            label="Password"
            size="small"
            value={password}
            onChange={e => setPassword(e.target.value)}
            >Testing</TextField>
            <Button  type="submit" variant="contained" color="primary" size="small" style={{ backgroundColor:"white", color:"#366FC3"}}>Sign Up</Button>
            <p>By signing up, you confirm that you've read and accepted our Terms of Service and Privacy Policy.</p>
          </div>
          </form>
      </div>
    </div>
    <SignupElement />
    </>
  )
}

export default NewUser
