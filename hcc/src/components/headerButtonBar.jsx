import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import {
  container,
  firstbuttonmiddle,
  secondbuttonmiddle
} from "../styles/styles.css";
import { Link } from "react-router-dom";
import { GiSpaceSuit } from "react-icons/gi";
import { IconContext } from "react-icons";
import Button from "react-bootstrap/Button";

class ButtonBar extends Component {
  render() {
    return (
      <Container style={container}>
        <Jumbotron className="sub-jbt">
          <Row>
            <Col xs={8}>
              <IconContext.Provider
                value={{
                  className: "global-class-name",
                  size: "4em"
                }}
              >
                <div>
                  <GiSpaceSuit />
                </div>
              </IconContext.Provider>
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
        </Jumbotron>
      </Container>
    );
  }
}

export default ButtonBar;
