import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import { container } from "../styles/styles";
import { Link } from "react-router-dom";

class ButtonBar extends Component {
  render() {
    return (
      <Container style={container}>
        <Jumbotron>
          <Row>
            <Col xs={8}>LOGO</Col>
            <Col>
              <Link to="/newapp">
                <button className="btn-primary btn-sm m-1">
                  New Application
                </button>
              </Link>
            </Col>
            <Col>
              <button className="btn-primary btn-sm m-1">Job Data</button>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default ButtonBar;
