import React, { useState } from "react";
import Button from "../../components/Button";

const Level = ({ counter }) => {
  switch (counter) {
    case 1:
      return <p>Level Rendah</p>;
    case 2:
      return <p>Level Sedang</p>;
    case 3:
      return <p>Level Tinggi</p>;
    default:
      return <p>Level tak terdefinisi</p>;
  }
};

const Conditional = () => {
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(1);

  const buttonToggle = () => {
    setShow(!show);
  };
  const addCounter = () => {
    setCounter(counter + 1);
  };

  // let component;
  // if (show) {
  //   component = <p>Button is Showing</p>;
  // } else {
  //   component = <p>Button is Hide</p>;
  // }

  // if (!show) {
  //   return (
  //     <div className="flex flex-col justify-center items-center h-screen">
  //       <p>Button is hide</p>
  //       <Button onClick={buttonToggle} />
  //     </div>
  //   );
  // }

  // return (
  //   <div className="flex flex-col justify-center items-center h-screen">
  //     {/* <p>{component}</p>
  //     <Button onClick={buttonToggle} /> */}
  //   </div>
  // );

  // return show ? <p>Button is Showing</p> : <p>Button is Hide</p>;

  // return (
  //   <div className="flex flex-col justify-center items-center h-screen">
  //     {show && <p>Button is Showing </p>}
  //     {!show && <p>Button is Hide</p>}
  //     <Button onClick={buttonToggle} />
  //   </div>
  // );

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Level counter={counter} />
      <Button onClick={addCounter} />
    </div>
  );
};

export default Conditional;
