import React, { Component } from "react";
import "./Board.css";
import source from "../images/source.png";
import target from "../images/target.png";

class Board extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.dragStartHandler = this.dragStartHandler.bind(this);
    this.dragOverHandler = this.dragOverHandler.bind(this);
    this.onDropHandler = this.onDropHandler.bind(this);
  }
  animate() {
    this.props.properties.animations
      .slice(1, this.props.properties.animations.length)
      .map((element, index) => {
        setTimeout(() => {
          document.getElementById(
            `${element[0]}-${element[1]}`
          ).style.animation = "fade 1.2s forwards linear";
        }, index * 30);
      });
  }

  // drag Start Handler-------------------
  dragStartHandler(e) {
    e.currentTarget.style.transform = "scale(1)";
    e.dataTransfer.setData("text/plain", e.target.id);
    e.dataTransfer.dropEffect = "move";
  }

  // drag over Handler-----------
  dragOverHandler(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }
  // on drop handler
  onDropHandler(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    var x = parseInt(e.target.id.split("-")[0]);
    var y = parseInt(e.target.id.split("-")[1]);
    this.props.handleChange(x, y, id);
    e.target.appendChild(document.getElementById(id));
    e.target.style.transform = "scale(1)";
    e.target.style.animation = "icon 0.2s forwards ease-out";
  }

  render() {
    // Board generation-----------------------------------------------------------
    let graph = [];
    let rows = this.props.properties.rows;
    let columns = this.props.properties.columns;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        var cls = "unvisited";
        var image = <img src="" alt="" />;
        if (
          i === this.props.properties.sourceX &&
          j === this.props.properties.sourceY
        ) {
          cls = "source";
          image = (
            <img
              draggable="true"
              onDragStart={this.dragStartHandler}
              src={source}
              alt="source"
              id="source"
            />
          );
        } else if (
          i === this.props.properties.targetX &&
          j === this.props.properties.targetY
        ) {
          cls = "target";
          image = (
            <img
              draggable="true"
              onDragStart={this.dragStartHandler}
              src={target}
              id="target"
              alt="target"
            />
          );
        }
        graph.push(
          <td
            onDragOver={this.dragOverHandler}
            onDrop={this.onDropHandler}
            className={cls}
            key={`${i}-${j}`}
            id={`${i}-${j}`}
          >
            {image}
          </td>
        );
      }
    }

    let completeBoard = [];
    for (let i = 0; i < rows; i++) {
      completeBoard.push(
        <tr id={`row-${i}`} key={i}>
          {graph.slice(i * 50, 50 * (i + 1))}
        </tr>
      );
    }

    // -----------------------------------------------------------------------------
    return (
      <div>
        <table className="container">
          <tbody>{completeBoard}</tbody>
          {this.animate()}
        </table>
      </div>
    );
  }
}

export default Board;
