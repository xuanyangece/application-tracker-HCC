import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import { Checkbox } from "semantic-ui-react";
import Button from "react-bootstrap/Button";

class timeline extends Component {
  state = {};

  render() {
    return (
      <div>
        <Container className="newappform">
          <p className="titles">Select Company Name:</p>
          <Checkbox label="Google" />
          <Checkbox label="Facebook" />
          <Checkbox label="Nike" />
          <Checkbox label="Amazon" />
        </Container>

        <Container className="newappbuttons">
          {this.renderAddButton()}
          <label style={{ width: "5%" }}></label>
          {this.renderGoBackButton()}
        </Container>
      </div>
    );
  }

  renderAddButton = () => {
    return (
      <Link to="/statposition">
        <Button variant="outline-info" size="lg">
          Select Position
        </Button>
      </Link>
    );
  };

  renderGoBackButton = () => {
    return (
      <Link to="/waittodone">
        <Button variant="outline-info" size="lg">
          Back To Dashboard
        </Button>
      </Link>
    );
  };
}

export default timeline;
