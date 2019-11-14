import React, { Component } from "react";
import ButtonBar from "./headerButtonBar";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.renderLogo()}
        <ButtonBar />
      </div>
    );
  }
}

export default Header;
