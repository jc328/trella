import React from 'react';
import e from 'express';

function NewUser ( { addUser } ) {
  setUser [user, newUser] = React.useState("");

  const addUser = (e) => {
    newUser(e.target.value);
  }

  const addUserClick = () => {
    addUser(user);
    newUser("");

  }


  return (
    <div>
      <input
        onChange={newUser}
        value={note}
        type="text"
        name="email"
        placeholder="Email"
      />
    <button onClick={addUserClick}>Sign Up</button>
    </div>
  )
}

export default NewUser
