import React, { Component } from "react";
import Box from "./applicationBox";
import Header from "./applicationHeader";

class Tracker extends Component {
  state = {
    count: 0,
    tags: []
  };

  render() {
    return (
      <div>
        <Header />
        <Box />
      </div>
    );
  }
}

export default Tracker;
