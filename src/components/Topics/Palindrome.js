import React, { Component } from 'react';

export default class Palindrome extends Component {
  constructor(){
    super()

    this.state ={
      userInput: '',
      palindrome: ''
    }
  }  

  handleChange(value){
    this.setState({userInput: value})
  }

  palindromeCheck(prop){
    let checkOne = prop
    let checkTwo = prop
    checkTwo = checkTwo.split('')
    checkTwo = checkTwo.reverse()
    checkTwo = checkTwo.join('')
    checkOne = checkOne.split(' ').join('')
    checkTwo = checkTwo.split(' ').join('')

      if(checkOne === checkTwo){
        return this.setState({palindrome: `${prop} is a palindrome`})
       } else {
            return this.setState({palindrome: `${prop} is not a palindrome`})
       }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.palindromeCheck(this.state.userInput)}>Palindrome Check</button>
        <span className="resultsBox">Palindrome: { this.state.palindrome }</span>
      </div>
    )
  }
}