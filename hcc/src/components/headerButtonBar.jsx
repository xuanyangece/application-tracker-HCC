import React, { Component } from "react";

class ButtonBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <button className="btn-primary btn-sm m-2">New Application</button>
        <button className="btn-primary btn-sm m-2">Job Data</button>
      </div>
    );
  }
}

export default ButtonBar;
