import React from 'react'
class EyesOnMe extends React.Component{
    focused=()=>{
        console.log('Good!')
    }
    blur=()=>{
        console.log('Hey! Eyes on me!')
    }
    render(){
        return(
            <button className='btn btn-primary' onBlur={this.blur} onFocus={this.focused}>Me</button>
        )
    }
}
export default EyesOnMe