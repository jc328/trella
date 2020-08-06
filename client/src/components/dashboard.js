import React from 'react';
import { Paper } from '@material-ui/core'
import '../styles/dashboard.css'
import ListTitle from './ListTitle';


function dashboard () {

  return (
    <>
    <Paper className="dashboard_list">
      <ListTitle />
    </Paper>
    </>
    )
  }

export default dashboard;
