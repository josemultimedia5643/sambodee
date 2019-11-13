import React, { Component } from "react";

export default class Lab3 extends Component {
  state = {
    sName: [
      { name: "Bruce Wayne", gender: "Male" },
      { name: "Clark Kent", gender: "Male" },
      { name: "Jenifer Aniston", gender: "Female" },
      { name: "Mariah Carrey", gender: "Female" }
    ]
  };

  maleBackground = { backgroundColor: "lightblue", width: 200 };
  femaleBackground = { backgroundColor: "pink", width: 200 };


  render() {
    return (
      <React.Fragment>
        {this.state.sName.map((item, index) =>
          index !== this.state.sName.length - 1 ? (
            <ul key={index}>
              <li
                style={
                  item.gender === "Male"
                    ? this.maleBackground
                    : this.femaleBackground
                }
              >
                {item.gender === "Male" ? "Mr." + item.name : "Ms." + item.name}
              </li>
            </ul>
          ) : null
        )}
      </React.Fragment>
    );
  }
}
