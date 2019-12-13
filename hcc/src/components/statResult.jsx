import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Checkbox } from "semantic-ui-react";

class timeline extends Component {
  state = {};

  render() {
    return (
      <div>
        <Container className="newappform">
          <p className="titles">Result:</p>
          <div className="stat-result">
            <p>
              <b>549</b> Applications of <b>Software Development Engineer</b> in{" "}
              <b>Google:</b>
            </p>
            <br />
            <p>
              <u>318 Done:</u>
            </p>
            <p id="offer">21 Offers - 3.8% out of all applications</p>
            <p id="rejected">297 Rejected - 54.1% out of all applications</p>
            <br />
            <p>
              <u>231 On Going:</u>
            </p>
            <p>48 Onsite Interviews</p>
            <p>183 Phone Interviews</p>
          </div>
        </Container>

        <Container className="newappbuttons">
          {this.renderGoBackButton()}
        </Container>
      </div>
    );
  }

  renderGoBackButton = () => {
    return (
      <Link to="/">
        <button className="btn-outline-dark btn-lg m-1">
          Back To Dashboard
        </button>
      </Link>
    );
  };
}

export default timeline;
