import React from 'react';
import { useSelector } from 'react-redux'

function Lists () {
  const cardData = useSelector(state => state.retrieveData)

  console.log('loadDash', cardData)


  return (
    <div>List of Cards List.js</div>
  )
}

// export default Lists
