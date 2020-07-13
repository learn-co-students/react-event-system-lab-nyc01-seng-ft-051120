// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {
    
     enterP = () => console.log('Entering password...')

render(){
    return(
        <div>
        <input type="password" onKeyUp={this.enterP} ></input>
        </div>
    )
}
}


export default Keypad