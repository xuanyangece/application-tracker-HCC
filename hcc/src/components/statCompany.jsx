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
          <p className="titles">Select Company Name:</p>
          <Checkbox label="Google" />
          <Checkbox label="Facebook" />
          <Checkbox label="Nike" />
          <Checkbox label="Amazon" />
        </Container>

        <Container className="newappbuttons">
          {this.renderAddButton()}
          {this.renderGoBackButton()}
        </Container>
      </div>
    );
  }

  renderAddButton = () => {
    return (
      <Link to="/statposition">
        <button className="btn-primary btn-lg m-1">Select Position</button>
      </Link>
    );
  };

  renderGoBackButton = () => {
    return (
      <Link to="/">
        <button className="btn-primary btn-lg m-1">Back To Dashboard</button>
      </Link>
    );
  };

  //   renderUpload = () => {
  //     return <button className="btn-primary btn-sm m-2">Upload</button>;
  //   };

  //   toggleRefered = prevState => {
  //     this.setState(prevState => ({ refered: !prevState.refered }));
  //   };

  //   renderReferButton = () => {
  //     return this.state.refered ? (
  //       <button onClick={this.toggleRefered} className="btn-primary btn-sm m-2">
  //         Yes
  //       </button>
  //     ) : (
  //       <button onClick={this.toggleRefered} className="btn-warning btn-sm m-2">
  //         No
  //       </button>
  //     );
  //   };
}

export default timeline;
