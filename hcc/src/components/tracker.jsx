import React, { Component } from "react";

class Tracker extends Component {
  state = {
    count: 0,
    tags: []
  };

  render() {
    return (
      <div>
        <span></span>
        <button></button>
      </div>
    );
  }
}

export default Tracker;
