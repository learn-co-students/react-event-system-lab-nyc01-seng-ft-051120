// Code EyesOnMe Component Here
import React  from 'react';


const EyesOnMe = () => {
  return(
    <button onFocus={()=> console.log('Good!')} onBlur={() => console.log("Hey! Eyes on me!")}>render</button>
  )

}

export default EyesOnMe;