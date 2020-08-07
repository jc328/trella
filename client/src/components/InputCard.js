import React, {useState} from 'react';
import { Button, Collapse } from '@material-ui/core';
import InputForm from './InputForm';

export default function InputCard() {
  const [menu, setMenu] = useState(false)

  return <div>

    <Collapse in={menu}>
      <InputForm setMenu={setMenu} />
    </Collapse>
    <Collapse in={!menu}>
      <Button style={{
        padding: 10,
        backgroundColor:"#dddee2",
        marginLeft: 10,
        border: "none",
        boxShadow: "none",
        }}
        className = "add_card_title"
        onClick = {() => setMenu(!menu)}
        >
          + Add a Card
      </Button>
    </Collapse>
  </div>
}
