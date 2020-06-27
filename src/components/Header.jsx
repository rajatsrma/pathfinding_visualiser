import React, { Component } from "react";
import "./Header.css";
import dfs from "./Algorithms/Dfs";

class Header extends Component {
  render() {
    return (
      <nav>
        <a href="#">Pathfinding Visualiser</a>
        <p>Depth first search</p>
        <button
          onClick={() => this.props.onClickHandler(dfs(this.props.properties))}
        >
          Visualise
        </button>
      </nav>
    );
  }
}

export default Header;
