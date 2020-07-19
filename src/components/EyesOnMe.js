import React, { Component } from 'react'

class EyesOnMe extends Component {

    // handleButtonEvents = (type) => {
    //     switch (type) {
    //         case 'focus':
    //             console.log('Good!');
    //             break
    //         case 'blur':
    //             console.log('Hey! Eyes on me!')
    //             break
    //     }
    // }

    handleFocusEvent = () => (
        console.log('Good!')
    )

    handleBlurEvent = () => (
        console.log('Hey! Eyes on me!')
    )

    render() {
        return (
            <div>
                <button onFocus={this.handleFocusEvent} onBlur={this.handleBlurEvent}>
                </button>
            </div>
        )
    }
}


export default EyesOnMe 