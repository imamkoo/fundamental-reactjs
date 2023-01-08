import React, { useState } from "react";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

const Dashboard = () => {
  // const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);

  // const addCounter = () => {
  //   const nextCounter = counter + 1;
  //   setCounter(nextCounter);
  // };

  const showComponent = () => {
    setShow(true);
  };
  const hideComponent = () => {
    setShow(false);
  };
  if (show) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1>Show Component</h1>
        <img src={moon} alt="moon" height={55} width={55} />
        <button
          className=" bg-black hover:bg-zinc-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          onClick={hideComponent}
        >
          Hide Component
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* <h1>{counter}</h1> */}
      <h2>Counter</h2>
      <img src={sun} alt="sun" height={55} width={55} />
      <button
        className=" bg-black hover:bg-zinc-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
        onClick={showComponent}
      >
        Show Component
      </button>
    </div>
  );
};

export default Dashboard;
