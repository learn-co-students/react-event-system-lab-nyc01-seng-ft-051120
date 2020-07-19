import React, { Component } from 'react'

class Keypad extends Component {

    handleInputPassowrd = () => (
        console.log("Entering password...")
    )

    render() {
        return (
            <div>
                <input type="password" onKeyUp={() => this.handleInputPassowrd()}>
                </input>
            </div>
        )
    }
}


export default Keypad

