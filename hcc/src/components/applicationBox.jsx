import React, { Component } from "react";
import AppRow from "./applicationRow";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/styles.css";

class Box extends Component {
  state = {};
  boxStyle = {};

  space = "     ";

  render() {
    // console.log(this.props);
    const { box } = this.props;

    return (
      <div className={box.clsn} style={this.boxStyle}>
        <h4 className="boxTitle">{box.title}</h4>

        <Row>
          <Col sm={2}>
            <p className="appTitle"> Company </p>
          </Col>

          <Col sm={1}>
            <p className="appTitle"> Position </p>
          </Col>

          <Col xs={1}>
            <p className="appTitle"> Resume</p>
          </Col>

          <Col xs={1}>
            <p className="appTitle"> Portal</p>
          </Col>
          <Col xs={2}>
            <p className="appTitle"> {this.space} Status </p>
          </Col>

          <Col xs={3}>
            <p className="appTitle"> Date </p>
          </Col>
        </Row>

        {box.applications.map(application => (
          <AppRow application={application} />
        ))}
      </div>
    );
  }
}

export default Box;
