import React, { Component } from "react";
import "./App.css";
import Comp1 from "./components/comp1";
import Comp2 from "./components/comp2";
import Lab3 from "./components/lab3";
import Comp3 from "./components/comp3";
import Product from "./components/product";

export default class App extends Component {
  styles = { borderWidth: 2, borderStyle: "dashed", margin: 50 };

  state = {
    phones: [
      { id: 1, name: "iPhone 5", price: 20, amount: 0 },
      { id: 2, name: "iPhone 6", price: 30, amount: 0 },
      { id: 3, name: "iPhone 7", price: 40, amount: 0 }
    ]
  };

  handleIncr = index => {
    let temp = [...this.state.phones];
    temp[index].amount++;
    this.setState({ phones: temp });
  };

  handleDecr = index => {
    let temp = [...this.state.phones];
    temp[index].amount--;
    this.setState({ phones: temp });
  };

  handleDel = index => {
    let temp = this.state.phones.filter(item => item.id != index);
    this.setState({ phones: temp });
  };

  render() {
    let total = this.state.phones.reduce(
      (acc, curr) => curr.amount * curr.price + acc,
      0
    );
    return (
      <React.Fragment>
        {/* <div style = {this.styles}>
          <Comp1 />
        </div>
        <div style = {this.styles}>
          <Comp2 />
        </div>
        <div style = {this.styles}>
          <Lab3 />
        </div>
        <div style = {this.styles}>
          <Comp3 />
        </div> */}
        <div>
          {this.state.phones.map((item, index) => (
            <Product
              key={index}
              phone={item}
              onInc={() => this.handleIncr(index)}
              onDec={() => this.handleDecr(index)}
              onDel={() => this.handleDel(item.id)}
            />
          ))}

          <span>Total: {total}</span>
        </div>
      </React.Fragment>
    );
  }
}
