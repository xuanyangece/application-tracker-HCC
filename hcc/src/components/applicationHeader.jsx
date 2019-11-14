import React, { Component } from "react";
import ButtonBar from "./headerButtonBar";

class Header extends Component {
  styles = {
    backgroundColor: "green",
    display: "flex"
  };

  render() {
    return <ButtonBar />;
  }
}

export default Header;
