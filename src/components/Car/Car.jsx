import PropTypes from 'prop-types';
import React from 'react';


class Car extends React.Component{

state = {
    velocity: 200
    }


constructor(props){
   super(props)
   
}

incrementVelocity = ()=>{
    this.setState({velocity: this.state.velocity + 50 });
}

render(){
  
 const {color, mark} = this.props    
   
 return <>
    <p>I am a Car of color: {color} and mark {mark}</p>
    <p>I am a Car velocity: {this.state.velocity}</p>
    <button onClick={this.incrementVelocity}>click</button>
 </> 
}

}

//validation with proptypes
Car.propTypes = {
    color: PropTypes.string.isRequired,
    mark:  PropTypes.string.isRequired
  }

export default Car;