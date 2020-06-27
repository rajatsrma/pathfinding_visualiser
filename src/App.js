import React, { Component } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 20,
      columns: 50,
      visited: {},
      targetX: 9,
      targetY: 35,
      sourceX: 0,
      sourceY: 0,
      animations: [],
      wall: {},
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onClickHandler(arr) {
    this.setState({
      animations: arr,
    });
  }
  handleChange(x, y, iD) {
    if (iD === "target") {
      this.setState({
        targetX: x,
        targetY: y,
      });
    }
    if (iD === "source") {
      this.setState({
        sourceX: x,
        sourceY: y,
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Header onClickHandler={this.onClickHandler} properties={this.state} />
        <Board handleChange={this.handleChange} properties={this.state} />
      </div>
    );
  }
}

export default App;
