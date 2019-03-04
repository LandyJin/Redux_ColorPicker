import React, { Component } from 'react';
import '../App.css';

export class Box extends Component {
  render() {
    return (
      <div className="box">
        <button onClick={() => {this.props.handleClick()}}>Change Color</button>
      </div>
    )
  }
}

export default Box
