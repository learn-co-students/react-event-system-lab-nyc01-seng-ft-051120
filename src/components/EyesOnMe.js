// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
    
    printGood = () => {
        console.log('Good!');
    }

    printMessage = () => {
        console.log('Hey! Eyes on me!');
        
    }
    render () {
        return (
            <div>
                <button 
                onFocus={this.printGood}
                onBlur={this.printMessage}
                >

                </button>
            </div>
        )
    }
 
}

export default EyesOnMe