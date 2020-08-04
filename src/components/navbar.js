import React from 'react';
import { Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';


function App () {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <AppsIcon />
        <HomeIcon />
        <Button variant="contained" color="primary">Boards</Button>
      </div>

    <div>Trella</div>

    </div>
  )
}

export default App;
