// Code Keypad Component Here
import React from 'react';
const Keypad = () => {

  return(
    <input type="password" onKeyUp={ () => console.log('Entering password...')}></input>
  )
}

export default Keypad;