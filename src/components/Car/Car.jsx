import React from 'react';

class Car extends React.Component{



state = {
    velocity: 200
}

constructor(props){
   super(props)
}

incrementVelocity = (velocity)=>{
    velocity += 50;
    this.componentDidUpdate(velocity)
    alert('Increment Success');
}


componentDidUpdate(velocity) {
    this.setState({velocity: velocity });
  }

render(){
  
 const {color, mark} = this.props    
   
 return <>
    <p>I am a Car of color: {color} and mark {mark}</p>
    <p>I am a Car velocity: {this.state.velocity}</p>
    <button onClick={this.incrementVelocity(this.state.velocity)}>click</button>
 </> 
}

}


export default Car;