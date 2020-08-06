import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import Search from './Search';
import { signOut } from '../store/auth';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import '../styles/navbar.css'


function Navbar () {
  const { needSignIn } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(signOut());
    return (
      <Redirect to="/" />
    )
  }

  if (needSignIn) {
    return <Redirect to="/" />
  }

  return (
    <div className="navbar">
      <div className="navbar_left">
        <IconButton onClick={console.log('Setup Menu Item')}>
        <AppsIcon style={{ fill: 'white', backgroundColor: 'lightblue', height: 18, marginBottom: 4, borderRadius: 3}}/>
        </IconButton>
        <IconButton onClick={console.log('Setup Home Button')}>
        <HomeOutlinedIcon style={{ fill: 'white', backgroundColor: 'lightblue', height: 18, marginBottom: 4, borderRadius: 3}}/>
        </IconButton>

        <Button variant="contained" color="primary" size="small">Boards</Button>
        <Search />
      </div>

      <div className="navbar_center">Trella</div>
      <div className="navbar_right">
        <div>User Menu</div>
        <Button
        variant="contained"
        onClick={handleClick}
        style={{fill: 'white', backgroundColor: 'lightblue', height: 18, marginBottom: 4, borderRadius: 3, fontSize:10}}>Sign Out</Button>
      </div>
  </div>
  )
}

export default Navbar;
