import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

class Row extends Component {
  state = {
    company: "Amazon",
    position: "SDE",
    status: "onsite",
    date: "X",
    portal: "URL",
    resume: "URL"
  };

  pStyle = {
    display: "inline",
    padding: "5px 25px"
  };

  render() {
    return (
      <div className="applicationRow">
        <p style={this.pStyle}>{this.state.company}</p>
        <p style={this.pStyle}>{this.state.position}</p>
        <p style={this.pStyle}>{this.state.status}</p>
        <Dropdown style={this.pStyle}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default Row;
