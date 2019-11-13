import React, { Component } from "react";

export default class Comp3 extends Component {
  state = {
    textValue: 0
  };

  containerStyle = null
  signStyle = { borderWidth: 1, borderStyle: "solid", width: 50 };
  stopStyle = {
    borderWidth: 1,
    borderStyle: "solid",
    width: 50,
    backgroundColor: "red"
  };
  slowStyle = {
    borderWidth: 1,
    borderStyle: "solid",
    width: 50,
    backgroundColor: "orange"
  };
  goStyle = {
    borderWidth: 1,
    borderStyle: "solid",
    width: 50,
    backgroundColor: "green"
  };

  handleChange = event => {
    switch (event.target.value) {
      default:
        this.setState({ textValue: 0 });
        break;

      case "1":
        this.setState({ textValue: 1 });
        break;

      case "2":
        this.setState({ textValue: 2 });
        break;

      case "3":
        this.setState({ textValue: 3 });
        break;
    }
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange}></input>

        <p style={this.state.textValue === 1 ? this.stopStyle : this.signStyle}>
          Stop
        </p>

        <p style={this.state.textValue === 2 ? this.slowStyle : this.signStyle}>
          Slow
        </p>

        <p style={this.state.textValue === 3 ? this.goStyle : this.signStyle}>
          Go
        </p>
      </div>
    );
  }
}
