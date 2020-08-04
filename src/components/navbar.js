import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import Search from './Search';


function Navbar () {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <IconButton onClick={console.log('Menu Item Button')}>
        <AppsIcon style={{ fill: 'white', backgroundColor: 'lightblue', height: 18, marginBottom: 4, borderRadius: 3}}/>
        </IconButton>
        <IconButton onClick={console.log('Home Button')}>
        <HomeOutlinedIcon style={{ fill: 'white', backgroundColor: 'lightblue', height: 18, marginBottom: 4, borderRadius: 3}}/>
        </IconButton>

        <Button variant="contained" color="primary" size="small">Boards</Button>
        <Search />
      </div>

      <div className="navbar_center">Trella</div>
      <div className="navbar_right">
        <div>User Menu</div>
        <div>Log Out</div>
      </div>
  </div>
  )
}

export default Navbar;
