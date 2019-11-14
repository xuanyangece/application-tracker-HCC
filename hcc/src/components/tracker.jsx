import React, { Component } from "react";
import Box from "./applicationBox";

class Tracker extends Component {
  state = {
    count: 0,
    tags: []
  };

  render() {
    return (
      <div>
        <span>hello</span>
        <button>hello</button>
        <Box />
      </div>
    );
  }
}

export default Tracker;
