import React from 'react';
import { Paper } from '@material-ui/core'
import '../styles/card.css'

export default function Card(props) {

  return (
    <div>
      <Paper
      className="card_input">{props.cardTitle}</Paper>
    </div>
  )
}
