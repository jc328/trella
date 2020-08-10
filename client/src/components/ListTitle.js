import React, {useState} from 'react';
import { InputBase, Typography } from '@material-ui/core';
import '../styles/dashboard.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

export default function ListTitle({title}) {

  const [menu, setMenu] = useState(false);

  return (
    <div >
      {menu ? (
        <div>
          <InputBase
          value={title}
          className="input_Title"
          style={{
            backgroundColor:"lightgrey",
            marginLeft: 10,
          }}
          onBlur = {() => setMenu(!menu)}
          />
        </div>) : (
        <div className="listopen_container">
          <Typography
          onClick={() => setMenu(!menu) }
          style={{
            marginLeft: 10,
            fontWeight: 'bold',
          }}
          className="list_title"
          >{title}</Typography>
          <MoreHorizIcon />
        </div>
            )}
    </div>
  )
}
