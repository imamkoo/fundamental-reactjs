import React, { useState } from "react";
import logo from "./assets/restricted.svg";

const FunctionalComponent = () => {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    const nextCounter = counter + 1;
    setCounter(nextCounter);
  };
  const prevCounter = () => {
    const prevCounter = counter - 1;
    setCounter(prevCounter);
  };

  const name = "Component";
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="text-4xl font-bold flex items-center justify-center ">
        <h1>Functional</h1>
        <img src={logo} alt="Logo" height={320} width={320} />
        <h1>{name}</h1>
      </div>
      <p className="text-2xl font-bold">Counter:{counter}</p>
      <div className=" flex flex-row gap-4 p-4">
        <button
          className=" bg-black hover:bg-zinc-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          onClick={prevCounter}
        >
          Prev Counter
        </button>
        <button
          className=" bg-black hover:bg-zinc-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          onClick={addCounter}
        >
          Add Counter
        </button>
      </div>
      <div className=" text-4xl flex flex-col justify-center items-center py-4">
        <p>ini adalah functional component dari react</p>
      </div>
    </div>
  );
};

export default FunctionalComponent;
