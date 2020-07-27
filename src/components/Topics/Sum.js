import React, { Component } from 'react';

export default class Sum extends Component {
  constructor(){
    super()

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

updateNumber1( value ){
  this.setState({ number1: parseInt( value, 10 )})
}

updateNumber2( value ){
  this.setState({ number2: parseInt( value, 10 )})
}

addNumbers(num1, num2){
  const sum = num1 + num2
  console.log(num1)
  console.log(num2)
  return this.setState({ sum: sum })
}




  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={ (e) => this.updateNumber1(e.target.value)}/>
        <input className="inputLine" onChange={ (e) => this.updateNumber2(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.addNumbers(this.state.number1, this.state.number2)}>Add</button>
        <span className="resultsBox">Sum = {this.state.sum}</span>
      </div>
    )
  }
}