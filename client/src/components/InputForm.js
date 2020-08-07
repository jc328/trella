import React, { useState } from 'react';
import { Paper, InputBase, Button, IconButton } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'

export default function InputForm({ setMenu }) {
  const [title, setTitle] = useState('')

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
        <Button style={{
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
