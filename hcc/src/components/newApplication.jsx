import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import "../styles/styles.css";
import Input from "./inputGroup";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class NewApplication extends Component {
  state = {
    refered: false
  };
  render() {
    return (
      <div>
        <Container className="newappform">
          <p className="titles">New Application</p>
          <Input required={true} title="Company" />
          <Input required={true} title="Position" />
          <Input required={true} title="Date applied" />
          <Input required={false} title="Position Link" />
          <Input required={false} title="Portal Link" />
          <label style={{ paddingRight: 250, marginRight: 180 }}>Resume</label>
          {this.renderUpload()}
          <label style={{ paddingRight: 250, marginRight: 200 }}>
            Refered?
          </label>
          {this.renderReferButton(this.state)}
        </Container>

        <Container className="newappbuttons">
          {this.renderAddButton()} <label style={{ width: "8%" }}> </label>
          {this.renderCancelButton()}
        </Container>
      </div>
    );
  }

  renderAddButton = () => {
    return (
      <Link to="/addednewapp">
        <Button variant="outline-info" size="lg">
          Complete
        </Button>
      </Link>
    );
  };

  renderCancelButton = () => {
    return (
      <Link to="/">
        <Button variant="outline-info" size="lg">
          Cancel
        </Button>
      </Link>
    );
  };

  renderUpload = () => {
    return <button className="btn-info btn-sm m-2">Upload</button>;
  };

  toggleRefered = prevState => {
    this.setState(prevState => ({ refered: !prevState.refered }));
  };

  renderReferButton = () => {
    return this.state.refered ? (
      <button onClick={this.toggleRefered} className="btn-info btn-sm m-2">
        Yes
      </button>
    ) : (
      <button onClick={this.toggleRefered} className="btn-warning btn-sm m-2">
        No
      </button>
    );
  };
}

export default NewApplication;
