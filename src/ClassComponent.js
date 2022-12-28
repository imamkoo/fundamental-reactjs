import React, { Component } from "react";
import image from "./assets/jumping.svg";

class ClassComponent extends Component {
  state = {
    counter: 0,
  };

  addCounter = () => {
    const { counter } = this.state;
    const nextCounter = counter + 1;
    this.setState({ counter: nextCounter });
  };
  prevCounter = () => {
    const { counter } = this.state;
    const prevCounter = counter - 1;
    this.setState({ counter: prevCounter });
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="flex flex-col items-center justify-center h-screen mt-64">
        <div className="text-center mx-4 space-y-2">
          <h1 className="text-5xl font-bold">Class Component</h1>
        </div>
        <img src={image} alt="classcomponent" height={320} width={320} />
        <p className="text-2xl font-bold">Counter:{counter}</p>
        <div className=" flex flex-row gap-4 p-4">
          <button
            className=" bg-black hover:bg-zinc-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
            onClick={this.prevCounter}
          >
            Prev Counter
          </button>
          <button
            className=" bg-black hover:bg-zinc-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
            onClick={this.addCounter}
          >
            Add Counter
          </button>
        </div>
        <div className="w-1/3 bg-green-200 rounded-lg ">
          <p className="break-words p-4 text-center">
            ini adalah class component dari react Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Natus similique delectus fuga impedit
            dolores, vel enim harum quam quasi nisi beatae dolore ipsum
            blanditiis. Mollitia repellendus laudantium ab vel sit.
          </p>
        </div>
      </div>
    );
  }
}
export default ClassComponent;
