import React from 'react'
class Keypad extends React.Component{
    keyPress=()=>{
        console.log('Entering password...')
    }
    render(){
        return(
            <form>
                <input className='input' type="password" onKeyUp={this.keyPress}></input>
            </form>
            
        )
    }
}
export default Keypad