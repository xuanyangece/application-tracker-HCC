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
import { GiSpaceSuit } from "react-icons/gi";
import { IconContext } from "react-icons";
import Button from "react-bootstrap/Button";
import logo from "../styles/logo.png";

class ButtonBar extends Component {
  render() {
    return (
      <div style={header}>
        <Row>
          <Col xs={8}>
            <div>
              <img src={logo} style={{ width: 80, height: 80 }} />
              <p
                style={{
                  display: "inline",
                  paddingLeft: "30px",
                  fontSize: "2em"
                }}
              >
                EasyApply
              </p>
            </div>
          </Col>
          <Col xs={2.5} className="firstbuttonmiddle">
            <Link to="/newapp">
              <Button variant="light">New Application</Button>
            </Link>
          </Col>
          <Col xs={2} className="secondbuttonmiddle">
            <Button variant="light">Job Data</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ButtonBar;
