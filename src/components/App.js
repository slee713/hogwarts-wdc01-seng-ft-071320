import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Filter from './Filter'
import Sort from './Sort'
import PigContainer from "./PigContainer"

class App extends Component {
  state = {
    pigs: hogs.map(hog=> {
      return( {...hog, "clicked": true})
    }),
    filter: "",
    sort: "",
    displayPigs: []
  }

  componentDidMount(){
    this.setState({
      displayPigs: this.state.pigs
    })
  }

  handleClicked =(clickedHog) =>{
    let hogs = this.state.pigs.map(hog => {
      if (hog === clickedHog){
        hog.clicked = !hog.clicked
      }
      return hog
    })
    this.setState({
      pigs: hogs
    })
  }

  filterGreased = (value) => {
    let pigList = []
    value === "greased" ? pigList = this.state.pigs.filter(pig => pig.greased) 
    : value === "ungreased" ? pigList = this.state.pigs.filter(pig => !pig.greased): pigList = this.state.pigs
    this.setState({
      filter: value,
      displayPigs: pigList,
      sort: ""
    })
  }

  sortPig = (value) => {
    let sortedPig = []
    value === "name" ? sortedPig = this.state.displayPigs.sort((a,b) => a.name > b.name  ? 1: -1)
    :  sortedPig = this.state.displayPigs.sort((a,b) => a.weight - b.weight)

    this.setState({
      sort: value,
      displayPigs: sortedPig
    })
  }
 

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter filter={this.filterGreased} greased={this.state.filter}/>
        <Sort sortBy={this.sortPig} sort={this.state.sort}/>
        <br/>
        <PigContainer pigs={this.state.displayPigs} clicked={this.handleClicked}/>
      </div>
    );
  }
}

export default App;
