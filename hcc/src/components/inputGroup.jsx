import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "../styles/styles.css";

class Input extends Component {
  render() {
    return (
      <InputGroup className="mb-3">
        {this.renderRequired(this.props.required)}
        <FormControl
          placeholder={this.props.title}
          aria-label={this.props.title}
        />
      </InputGroup>
    );
  }

  renderRequired = required => {
    if (required) {
      return (
        <InputGroup.Prepend>
          <InputGroup.Text>*</InputGroup.Text>
        </InputGroup.Prepend>
      );
    }
  };
}

export default Input;
