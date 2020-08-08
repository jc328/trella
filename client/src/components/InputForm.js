import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Paper, InputBase, Button, IconButton } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
import { addCard, loadDashboard } from '../store/dashboard';


export default function InputForm({ setMenu }) {
  const cardData = useSelector(state => state.retrieveData)
  let { cardData:{ boardData: userId } } = cardData
  if (userId) {
    console.log(userId[0].user_id)
  }
  const [title, setTitle] = useState('')
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addCard(title, 4))

    // To test if we can update card list on click
    dispatch(loadDashboard(userId[0].user_id))
  }

  return (
    <div>
      <div>
      <Paper style={{
        padding: 20,
        margin: 10
      }}>
        <InputBase
          multiline
          fullWidth
          onChange = {(e) => {setTitle(e.target.value)}}
          placeholder="Enter a title for this card..."
          value={title}
          onBlur = {() => setMenu(false)}

          />
      </Paper>
      </div>
      <div>
        <Button
        onClick = {() => {handleClick()}}
        style={{
          backgroundColor:"green",
          marginLeft: 10
        }}

        >Add Card</Button>
        <IconButton onClick={() => setMenu(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  )
}
