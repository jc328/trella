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
  let { cardData:{ boardData: board_id } } = cardData

  var firstBoard = ''
  let listArr = [];

  if (board_id) {
    firstBoard = board_id[0]

    for (let x of list_id) {
      if (x.board_id === firstBoard.id) {
        listArr.push(x)
      }
   }
  }

  const dispatch = useDispatch();
  const handleClick = () => {
    // dispatch(loadDashboard(userId[0].user_id))
    dispatch(loadDashboard(2))
  }

  console.log("listArr", listArr)

  if (cards) {
    // console.log('cardData', cards)
    // console.log('list_id', list_id)
    // console.log('userId', userId)
    // console.log('board_id', firstBoard )
  }

  return (
    <>
    <Navbar title={firstBoard.title}/>
    <div style={{display:"flex", justifyContent:"center"}}>
    {listArr.map((list, idx) => {
      return (
          <Paper
          className="dashboard_list"
          style={{backgroundColor:"#dddee2"}}
          key={idx}
          >
            <ListTitle title={list.title}/>
            {cards ? cards.map((card, idx) => <Card key={card.id} cardTitle={card.title} list_id={card.list_id}/>) : ''}
            <InputCard list_id={list.id} />

          </Paper>
      )
    })}
    </div>


    <Button variant="outlined" onClick={handleClick}>Load Data</Button>
    </>
    )

  }

  Dashboard.defaultProps = {
    cards: {}
  }


export default Dashboard;
