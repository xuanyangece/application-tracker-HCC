import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { DatePicker, DatePickerInput } from "rc-datepicker";
import "rc-datepicker/lib/style.css";

class Row extends Component {
  state = {
    company: "Amazon",
    position: "SDE",
    status: "onsite",
    date: "2015-06-26",
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

  calStyle = {
    width: "200px",
    display: "inline-block"
  };

  render() {
    return (
      <div className="applicationRow" style={this.rowStyle}>
        <p style={this.pStyle}>{this.state.company}</p>
        <p style={this.pStyle}>{this.state.position}</p>
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

        <DatePickerInput
          onChange={this.onChange}
          value={this.state.date}
          className="my-custom-datepicker-component"
          style={this.calStyle}
        />
      </div>
    );
  }

  onChange = (jsDate, dateString) => {
    // ...
  };
}

export default Row;
