import React from 'react';
import { TextField } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';

function Search () {

  return (
    <TextField
    InputProps={{
      startAdornment: (
        <InputAdornment position="start" >
          <SearchOutlinedIcon style={{ fill: 'white' }}/>
        </InputAdornment>
      ),
      style: {
       marginLeft: 10,
       fontSize: 10,
       height: 20,
       backgroundColor: '#919A9D',
     }}
    }
    // label="search"
    variant="outlined"
    size="small"
     />
    )
  }



export default Search;
