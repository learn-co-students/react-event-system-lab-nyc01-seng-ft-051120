// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {
    handleInputPassword = () => console.log('Entering password...')

    render() { 
        return (  
            <div>
                <input onKeyUp={this.handleInputPassword} type="password"/>
            </div>
        );
    }
}
 
export default Keypad;