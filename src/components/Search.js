import React from 'react';
import { TextField } from '@material-ui/core';

function Search (props) {

  return (
    <TextField InputProps={{ style: { marginLeft: 10, fontSize: 10, height: 20, backgroundColor: 'lightblue'} }}
    variant="outlined"
    size="small"
  />
    )
  }


export default Search;
