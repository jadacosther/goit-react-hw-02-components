import React from 'react'
import Notification from './component/Notification';
import './App.css'


class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  constructor(props){
    super(props);
  }
  
  totalFeedback = ()=>{
    const {good, neutral, bad} = this.state
    return good + neutral + bad
  }

  incrementGood = () => {
    this.setState({good:  this.state.good + 1})
  }

  incrementNeutral = () => {
    this.setState({neutral: this.state.neutral + 1})
  }


  incrementBad = () => {
    this.setState({bad: this.state.bad + 1})
  }


  percentfeedback = () => {
    return this.totalFeedback() > 0 ? Math.round((this.state.good/this.totalFeedback() )*100) : 0
  }


  render(){
      const {good, neutral, bad} = this.state
      return (
        <div>
        <h3>Please leave feedback</h3>
        <button onClick={this.incrementGood}>Good</button>
        <button onClick={this.incrementNeutral} >Neutral</button>
        <button onClick={this.incrementBad}>Bad</button>
        { this.totalFeedback() > 0 ?
          <div>
            <h3>Statistics</h3>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {this.totalFeedback()}</p>
            <p>Positive Feedback: {this.percentfeedback()} %</p>
          </div>
         :
         <Notification message="There is no feedback"></Notification>}
        </div>
      )
  }
}

export default App
