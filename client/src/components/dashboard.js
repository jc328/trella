import React from 'react';
import { Button, Paper } from '@material-ui/core'
import '../styles/dashboard.css'
import ListTitle from './ListTitle';
import Card from './Card'
import InputCard from './InputCard';
import { useSelector, useDispatch } from 'react-redux'
import { loadDashboard } from '../store/dashboard';
import Navbar from './Navbar';

// *** REMOVE LOAD DATA BUTTON ***

function Dashboard () {
  const cardData = useSelector(state => state.retrieveData)
  let { cardData:{ cardData: cards } } = cardData
  let { cardData:{ boardData: userId } } = cardData
  let { cardData:{ listData: list_id } } = cardData

  const dispatch = useDispatch();
  const handleClick = () => {
    // dispatch(loadDashboard(userId[0].user_id))
    dispatch(loadDashboard(1))
  }

  if (cards) {
    // console.log('cardData', cardData)
    console.log('listData', list_id)
  }

  return (
    <>
    <Navbar />
    <Paper
    className="dashboard_list"
    style={{backgroundColor:"#dddee2"}}
    >
      <ListTitle />
      {cards ? cards.map((card, idx) => <Card key={card.id} cardTitle={card.title}/>) : ''}
      <InputCard />

    </Paper>
    <Button variant="outlined" onClick={handleClick}>Load Data</Button>
    </>
    )

  }

  Dashboard.defaultProps = {
    cards: {}
  }


export default Dashboard;
