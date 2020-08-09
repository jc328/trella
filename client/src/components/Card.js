import React from 'react';
import { Paper } from '@material-ui/core'
import '../styles/card.css'
import { Draggable } from 'react-beautiful-dnd';

export default function Card({cardTitle, card_id, index}) {
  // console.log(props)
  return (
    <Draggable draggableId={card_id.toString()} index={index}>

      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper
          className="card_input">{cardTitle}</Paper>
        </div>
      )}
    </Draggable>
  )
}
