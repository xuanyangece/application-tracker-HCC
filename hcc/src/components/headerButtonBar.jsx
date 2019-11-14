import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ButtonBar extends Component {
  styles = {
    paddingTop: 10
  };
  render() {
    return (
      <Container style={this.styles}>
        <Row>
          <Col xs={8}>LOGO</Col>
          <Col>
            <button className="btn-primary btn-sm m-1">New Application</button>
          </Col>
          <Col>
            <button className="btn-primary btn-sm m-1">Job Data</button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ButtonBar;
