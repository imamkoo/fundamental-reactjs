import React, { Component } from "react";
import Button from "../../components/Button";

export default class EventHandleClass extends Component {
  state = {
    counter: 0,
  };

  handleOnClick(event) {
    console.log(event);
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  handleOnClickArrow = (event) => {
    console.log(event);
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    console.log(this.state.counter);
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <Button onClick={this.handleOnClick.bind(this)} text="Click Me" />
        <Button onClick={this.handleOnClickArrow} text="Click Me Arrow" />
      </div>
    );
  }
}
