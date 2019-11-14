import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  renderTags() {
    if (this.state.count === 0) return <p>There is no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <span></span>
        <button onClick={this.handleIncrement}></button>
      </div>
    );
  }
}

export default Counter;
