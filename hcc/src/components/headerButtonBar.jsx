import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import {
  container,
  header,
  firstbuttonmiddle,
  secondbuttonmiddle
} from "../styles/styles.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../styles/logo.png";

class ButtonBar extends Component {
  render() {
    return (
      <div style={header}>
        <Row>
          <Col xs={7}>
            <div className="logo-header">
              <img src={logo} style={{ width: 80, height: 80 }} />
              <p
                style={{
                  display: "inline",
                  paddingLeft: "30px",
                  fontSize: "2em",
                  position: "absolute",
                  bottom: "20px"
                }}
              >
                EasyApply
              </p>
            </div>
          </Col>
          <Col xs={2.5} className="firstbuttonmiddle">
            <Link to="/newapp">
              <Button variant="outline-info" size="lg">
                New Application
              </Button>
            </Link>
          </Col>
          <Col xs={2} className="secondbuttonmiddle">
            <Link to="/statcompany">
              <Button variant="outline-info" size="lg">
                Job Data
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ButtonBar;
