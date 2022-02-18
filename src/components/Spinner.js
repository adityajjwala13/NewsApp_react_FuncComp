import React, { Component } from "react";
import loading from "./BeanEater.gif";

export class Spinner extends Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

export default Spinner;
