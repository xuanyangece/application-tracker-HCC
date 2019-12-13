import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import { Checkbox } from "semantic-ui-react";

class timeline extends Component {
  state = {};

  render() {
    return (
      <div>
        <Container className="newappform">
          <p className="titles">Select Position Name:</p>
          <Checkbox label="Software Development Engineer" />
          <Checkbox label="Product Manager" />
          <Checkbox label="Sales" />
          <Checkbox label="TA" />
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
      <Link to="/statresult">
        <button className="btn-outline-success btn-lg m-1">See Data</button>
      </Link>
    );
  };

  renderGoBackButton = () => {
    return (
      <Link to="/waittodone">
        <button className="btn-outline-dark btn-lg m-1">
          Back To Dashboard
        </button>
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
