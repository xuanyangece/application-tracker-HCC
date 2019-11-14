import React, { Component } from "react";
import Row from "./applicationRow";

class Box extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Row />
        <Row />
      </React.Fragment>
    );
  }
}

export default Box;
