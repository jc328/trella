import React, {useState} from 'react';
import { InputBase, Typography } from '@material-ui/core';
import '../styles/dashboard.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

export default function ListTitle() {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      {menu ? (
              <div>
                <InputBase
                value="Title"
                className="input_Title"
                onBlur = {() => setMenu(!menu)}
                />
              </div>
      ) : (
        <div className="listopen_container">
          <Typography
          onClick={() => setMenu(!menu) }
          className="list_title"
          >Title</Typography>
          <MoreHorizIcon />
      </div>
      )}
    </div>
  )
}
