import React, { Component } from "react";
import ButtonBar from "./headerButtonBar";

class Header extends Component {
  styles = {
    backgroundColor: "green",
    display: "flex"
  };

  render() {
    return (
      <span style={this.styles}>
        <ButtonBar />
      </span>
    );
  }
}

export default Header;
