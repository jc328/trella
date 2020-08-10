import React from 'react';
import { Button } from '@material-ui/core'

export default function DemoButton ({ email, setEmail, password, setPassword }) {

  let i=0, k=0, spd = 70;
  let txt = 'test@gmail.com'
  let pwd = 'hashed'

  let handleClick = () => {
    setEmail('')
    email = ''
    setPassword('')
    password = ''
    typeEmail()
    setTimeout(typePassword, spd*txt.length)
  }

  function typeEmail() {
    if (i < txt.length) {
      setEmail(email += txt.charAt(i))
      i++
      setTimeout(typeEmail, spd);
    }
  }
  function typePassword() {
    if (k < pwd.length) {

      setPassword(password += pwd.charAt(k))
      k++;
      setTimeout(typePassword, spd);
    }
    // document.querySelector('.signIn').click()
  }

  return (
    <Button
    type="click"
    variant="contained"
    color="primary"
    size="small"
    onClick={handleClick}
    style={{ backgroundColor:"", color:"#"}}

    >Demo User</Button>
  )
}
