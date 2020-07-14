// Code EyesOnMe Component Here
import React from 'react';
class EyesOnMe extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }

    focusHandler = () => console.log('Good!');
    blurHandler = () => console.log('Hey! Eyes on me!');

    render() { 
        return ( 
            <button onFocus={this.focusHandler} onBlur={this.blurHandler}></button>
         );
    }
}
 
export default EyesOnMe;