// Code Keypad Component Here
import React from 'react';
class KeyPad extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }

  handleInputPassword = () => {
    console.log('Entering password...')
  }
  
    render() { 
        return ( 
            <div>
                <input type="password" onKeyUp={this.handleInputPassword}></input>
            </div>
         );
    }
}
 
export default KeyPad;