import React, { Component } from "react";
import "./Board.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: 50,
    };
  }
  render() {
    let graph = [];
    let rows = 30;
    let columns = 50;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        graph.push(<td id={`${i}-${j}`}></td>);
      }
    }

    let completeBoard = [];
    for (let i = 0; i < rows; i++) {
      completeBoard.push(
        <tr id={`row-${i}`}>{graph.slice(i * 50, 50 * (i + 1))}</tr>
      );
    }

    return (
      <table className="container">
        <tbody>{completeBoard}</tbody>
      </table>
    );
  }
}

export default Board;
