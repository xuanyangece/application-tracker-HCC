import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { DatePickerInput } from "rc-datepicker";
import "rc-datepicker/lib/style.css";
import { TiBusinessCard } from "react-icons/ti";
import { MdInsertLink } from "react-icons/md";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AppRow extends Component {
  state = {
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

  btStyle = {
    margin: "auto 20px",
    paddingLeft: "20px",
    paddingRight: "20px"
  };

  icStyle = {};

  render() {
    const { application } = this.props;
    console.log(this.props);

    return (
      <div className="applicationRow" style={this.rowStyle}>
        <Row>
          <Col sm={2}>
            <p>{application.company}</p>
          </Col>

          <Col sm={1}>
            <p>{application.position}</p>
          </Col>

          <Col xs={2}>
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                Onsite
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Phone Interview</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Offer</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Reject</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col xs={3}>{this.dateDisplay(application)}</Col>

          <Col>
            <Button variant="light">Update</Button>
          </Col>

          <Col xs={1}>
            <TiBusinessCard />
          </Col>

          <Col xs={1}>
            <MdInsertLink />
          </Col>
        </Row>
      </div>
    );
  }

  dateDisplay = application => {
    if (application.status == "Offer" || application.status == "Rejected") {
      return <p>{this.props.application.date}</p>;
    } else {
      return (
        <DatePickerInput
          onChange={this.onChange}
          value={application.date}
          className="my-custom-datepicker-component"
          style={this.calStyle}
        />
      );
    }
  };

  onChange = (jsDate, dateString) => {
    // ...
  };
}

export default AppRow;
