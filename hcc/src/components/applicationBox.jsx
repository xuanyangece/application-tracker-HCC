import React, { Component } from "react";
import Row from "./applicationRow";

class Box extends Component {
  state = {};
  boxStyle = {};

  render() {
    // console.log(this.props);
    const { box } = this.props;

    return (
      <div className="applicationRow" style={this.boxStyle}>
        <h4>{box.title}</h4>
        {box.applications.map(application => (
          <Row application={application} />
        ))}
      </div>
    );
  }
}

export default Box;
