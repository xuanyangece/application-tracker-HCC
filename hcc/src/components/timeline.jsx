import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class timeline extends Component {
  state = {
    refered: false
  };

  titleStyle = {
    paddingLeft: "0px",
    paddingRight: "0px"
  };
  render() {
    return (
      <div>
        <Container className="newappform">
          <p className="titles">Timeline of Application</p>
          <div className="timelineBox">
            {" "}
            <Row>
              <Col style={this.titleStyle}>
                <label className="timelineTitle">Applied Date:</label>
              </Col>
              <Col>2019-6-10</Col>
            </Row>
            <br />
            <Row>
              <Col style={this.titleStyle}>
                <label className="timelineTitle">
                  Move from Applied to Phone Interview:
                </label>
              </Col>
              <Col>2019-7-27</Col>
            </Row>
            <br />
            <Row>
              <Col style={this.titleStyle}>
                <label className="timelineTitle">Phone Interview:</label>
              </Col>
              <Col>2019-8-20</Col>
            </Row>
            <br />
            <Row>
              <Col style={this.titleStyle}>
                <label className="timelineTitle">
                  Move from Phone Interview to Rejected:
                </label>
              </Col>
              <Col>2019-9-8</Col>
            </Row>
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
        <button className="btn-primary btn-lg m-1">Back To Dashboard</button>
      </Link>
    );
  };

  renderUpload = () => {
    return <button className="btn-primary btn-sm m-2">Upload</button>;
  };

  toggleRefered = prevState => {
    this.setState(prevState => ({ refered: !prevState.refered }));
  };

  renderReferButton = () => {
    return this.state.refered ? (
      <button onClick={this.toggleRefered} className="btn-primary btn-sm m-2">
        Yes
      </button>
    ) : (
      <button onClick={this.toggleRefered} className="btn-warning btn-sm m-2">
        No
      </button>
    );
  };
}

export default timeline;
