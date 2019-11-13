import React, { Component } from "react";

export default class Product extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>{this.props.phone.name}</h1>
        <h2>{this.props.phone.price}</h2>

        <button onClick={this.props.onInc}>+</button>
        <button
          onClick={this.props.phone.amount != 0 ? this.props.onDec : null}
        >
          -
        </button>
        <button onClick={this.props.onDel}>Delete</button>
      </div>
    );
  }
}
