import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor(){
    super()

    this.state = {
      toys: ['ball', 'truck', 'bike', 'bubbles', 'elephant', 'phone'],
      userInput: '',
      filteredToys: []
    }
  }

  handleChange (val){
    this.setState({userInput: val})
  }

  filterString (val){
    let filteredToys = []
    filteredToys = this.state.toys.filter(function (str) {return str.includes(val)})
    this.setState({ filteredToys: filteredToys})
  }

  render() {
    return (
      <div className="puzzleBox filterStrinPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Toys: { JSON.stringify(this.state.toys, null, 10)}</span>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} />
        <button className="confirmationButton" onClick={ () => this.filterString(this.state.userInput)}>Filter</button>
        <span className="reultsBox filterStringPB">Filtered Toys: {JSON.stringify(this.state.filteredToys)}</span>
      </div>
    )
  }
}