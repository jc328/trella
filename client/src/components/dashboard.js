import React from 'react';
import { Paper } from '@material-ui/core'
import '../styles/dashboard.css'
import ListTitle from './ListTitle';
import Card from './Card'
import InputCard from './InputCard';
import Lists from './Lists'
import { useDispatch } from 'react-redux'
import {loadDashboard} from '../store/dashboard';

function Dashboard () {
  const dispatch = useDispatch();
  dispatch(loadDashboard())

  return (
    <>
    <Lists />
    <Paper
    className="dashboard_list"
    style={{backgroundColor:"#dddee2"}}
    >
      <ListTitle />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <InputCard />
    </Paper>
    </>
    )
  }

export default Dashboard;
