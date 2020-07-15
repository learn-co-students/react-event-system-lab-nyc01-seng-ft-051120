// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

    buttonForFocus = () => {
        console.log('Good!')
    }

    buttonForBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render () {
        return (
            <button onFocus={this.buttonForFocus} onBlur={this.buttonForBlur}>
                Eyes on me, please!
            </button>
        )
    }
}

export default EyesOnMe
