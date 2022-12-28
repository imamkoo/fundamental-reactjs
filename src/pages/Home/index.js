import React, { Component } from "react";

export default class Home extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       navigation: "initial",
  //     };
  //   }

  state = {
    navigation: "initial",
    counter: 0,
  };

  getData = () => {
    this.setState({ navigation: "ready" });
  };

  addCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
    // this.setState((prevState) => ({ ...prevState, counter: 10 }));
  };

  render() {
    console.log("Render Component");
    const { navigation, counter } = this.state;

    if (navigation === "initial") {
      return (
        <div className="flex flex-col justify-center items-center h-screen">
          <p>Loading...</p>
          <button
            className=" bg-black hover:bg-zinc-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
            onClick={this.getData}
          >
            Get Data
          </button>
        </div>
      );
    }

    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1>Counter </h1>
        <p>{counter}</p>
        <button
          className=" bg-black hover:bg-zinc-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          onClick={this.addCounter}
        >
          Add Counter
        </button>
      </div>
    );
  }
}
