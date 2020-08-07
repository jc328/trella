import React from 'react';
import { Paper, InputBase, Button, IconButton } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'

export default function InputForm() {

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
          placeholder="Enter a title for this card..."
          />
      </Paper>
      </div>
      <div>
        <Button style={{
          backgroundColor:"green",
          marginLeft: 10
        }}>Add Card</Button>
        <IconButton>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  )
}