import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { DatePickerInput } from "rc-datepicker";
import "rc-datepicker/lib/style.css";
import { TiBusinessCard } from "react-icons/ti";
import { MdInsertLink } from "react-icons/md";
import { IconContext } from "react-icons";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AppRow extends Component {
  state = {
    status: this.props.application.status,
    portal: "URL",
    resume: "URL"
  };

  pStyle = {
    marginTop: "7px"
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

    return (
      <div className="applicationRow" style={this.rowStyle}>
        <Row>
          <Col sm={2}>
            <p style={this.pStyle}>{application.company}</p>
          </Col>

          <Col sm={1}>
            <p style={this.pStyle}>{application.position}</p>
          </Col>

          <Col xs={2}>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                {this.state.status}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={e => this.onClick("Onsite")}
                >
                  Onsite
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  onClick={e => this.onClick("Video Interview")}
                >
                  Video Interview
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  onClick={e => this.onClick("Phone Interview")}
                >
                  Phone Interview
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-4"
                  onClick={e => this.onClick("Offer")}
                >
                  Offer
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-5"
                  onClick={e => this.onClick("Rejected")}
                >
                  Rejected
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col xs={3}>{this.dateDisplay(application)}</Col>

          <Col>
            <Button variant="light">Update</Button>
          </Col>

          <Col xs={1}>
            <IconContext.Provider
              value={{
                className: "global-class-name",
                size: "2em"
              }}
            >
              <div>
                <TiBusinessCard />
              </div>
            </IconContext.Provider>
          </Col>

          <Col xs={1}>
            <IconContext.Provider
              value={{
                className: "global-class-name",
                size: "2em"
              }}
            >
              <div>
                <MdInsertLink />
              </div>
            </IconContext.Provider>
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

  onClick = newStatus => {
    this.setState({ status: newStatus });
  };

  onChange = (jsDate, dateString) => {
    // ...
  };
}

export default AppRow;
