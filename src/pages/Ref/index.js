import React, { Component, createRef } from "react";
import Button from "../../components/Button";
import Calculator from "./calc";

export default class RefComponent extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.inputRef = createRef();
  //   }

  inputRef = createRef();
  calcRef = createRef();

  handleInputRef = (inputRefComponent) => {
    this.inputRefComponent = inputRefComponent;
  };

  handleFocus = () => {
    // const element = document.getElementById("input");
    // const element = this.inputRef.current;
    const element = this.inputRefComponent;
    element.focus();
  };

  handleReset = () => {
    // const element = document.getElementById("input");
    // const element = this.inputRef.current;
    const element = this.inputRefComponent;
    element.value = "";
  };

  handleSetValue = () => {
    // const element = document.getElementById("input");
    // const element = this.inputRef.current;
    const element = this.inputRefComponent;
    element.value = "Imam.ko use ref function";
  };

  handleOnCalculate = () => {
    const element = this.calcRef.current;
    element.handleCalculator();
  };

  render() {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <input
          //   ref={this.inputRef}
          ref={this.handleInputRef}
          type="text"
          name="input"
          id="input"
          className="bg-slate-800 dark:bg-slate-800 text-white h-10"
        />
        <Button text="Focus" onClick={this.handleFocus} />
        <Button text="Reset" onClick={this.handleReset} />
        <Button text="Set Value" onClick={this.handleSetValue} />

        <Calculator ref={this.calcRef} />
        <Button onClick={this.handleOnCalculate} text="Call Calculate" />
      </div>
    );
  }
}
