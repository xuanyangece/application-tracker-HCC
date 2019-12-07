import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { DatePickerInput } from "rc-datepicker";
import "rc-datepicker/lib/style.css";
import { TiBusinessCard } from "react-icons/ti";
import { MdInsertLink } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import "../styles/styles.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AppRow extends Component {
  state = {
    status: this.props.application.status,
    portal: "URL",
    resume: "URL"
  };

  pStyle = {
    marginTop: "5px",
    fontSize: "20px"
  };

  calStyle = {
    width: "200px",
    display: "inline-block"
  };

  iconStyle = {
    color: "black",
    $nest: {
      "&:hover": {
        color: "red"
      }
    }
  };

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

          <Col xs={2}>{this.renderStatus(application)}</Col>

          <Col xs={3}>{this.dateDisplay(application)}</Col>

          <Col>{this.renderUpdateButton(application)}</Col>

          <Col xs={1}>
            <a
              href="https://drive.google.com/file/d/1_cWZgbPpZAYvHbXuQwi2cinc2XpJBYIv/view?usp=sharing"
              className="icons"
              style={this.iconStyle}
            >
              {""}
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
            </a>
          </Col>

          <Col xs={1}>
            <a
              href="https://www.amazon.jobs/en/jobs/908703/software-development-engineer-2020-united-states?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
              className="icons"
              style={this.iconStyle}
            >
              {" "}
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
            </a>
          </Col>
        </Row>
      </div>
    );
  }

  dateDisplay = application => {
    if (application.status == "Offer" || application.status == "Rejected") {
      return <p style={this.pStyle}>{this.props.application.date}</p>;
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

  renderStatus = application => {
    if (application.status == "Offer" || application.status == "Rejected") {
      return <p style={this.pStyle}>{this.props.application.status}</p>;
    } else {
      return (
        <Dropdown>
          <Dropdown.Toggle variant="light btn-block" id="dropdown-basic">
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
      );
    }
  };

  renderUpdateButton = application => {
    if (application.status == "Offer" || application.status == "Rejected") {
      return (
        <Button variant="info" onClick={this.nextPage}>
          Timeline
        </Button>
      );
    } else {
      return (
        <Button variant="dark" onClick={this.nextPage}>
          Update
        </Button>
      );
    }
  };

  nextPage = () => {
    if (this.props.application.company == "Amazon") {
    } else if (this.props.application.company == "Nike") {
    }
  };

  decideLink = () => {};

  onClick = newStatus => {
    this.setState({ status: newStatus });
  };

  onChange = (jsDate, dateString) => {
    // ...
  };
}

export default AppRow;
