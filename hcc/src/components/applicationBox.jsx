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
      <div className="applicationBox" style={this.boxStyle}>
        <h4>{box.title}</h4>

        <Row>
          <Col sm={2}>
            <p> Company </p>
          </Col>

          <Col sm={1}>
            <p> Position </p>
          </Col>

          <Col xs={2}>
            <p> {this.space} Status </p>
          </Col>

          <Col xs={3}>
            <p> Date </p>
          </Col>

          <Col>
            <p> Update Status/Date</p>
          </Col>

          <Col xs={1}></Col>

          <Col xs={1}></Col>
        </Row>

        {box.applications.map(application => (
          <AppRow application={application} />
        ))}
      </div>
    );
  }

  update = () => {
    this.props.update();
  };
}

export default Box;
