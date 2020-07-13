// Code EyesOnMe Component Here
import React from 'react'
class EyesOnMe extends React.Component{
  focusOnMe = ()=>{console.log('Good!')}
  notOnMe = ()=>{console.log('Hey! Eyes on me!')}
render(){
  return(
<div>
<button onFocus={this.focusOnMe} onBlur={this.notOnMe}></button>
</div>
)}
}
export default EyesOnMe