import React, { Component } from "react";
// import ChildProp from "./ChildProp";
import Card from './Card'

export default class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      displayBio: false,
    };
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }

  toggleDisplayBio() {
    this.setState({
      displayBio: !this.state.displayBio,
    });
  }

  render() {
    return (
      <div>
        {this.state.displayBio ? (
          <div>
           
           <Card/>

            <button onClick={this.toggleDisplayBio}> Show Less </button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}> Read More </button>
          </div>
        )}
      </div>
    );
  }
}
