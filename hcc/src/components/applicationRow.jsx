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

  rowStyle = {
    margin: "10px auto"
  };

  render() {
    return (
      <div className="applicationRow" style={this.rowStyle}>
        <p style={this.pStyle}>{this.state.company}</p>
        <p style={this.pStyle}>{this.state.position}</p>
        <p style={this.pStyle}>{this.state.status}</p>
        <Dropdown style={this.pStyle}>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            Onsite
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Phone Interview</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Offer</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Reject</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default Row;
