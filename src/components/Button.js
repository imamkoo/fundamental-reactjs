import React from "react";

const Button = (props) => {
  return (
    <button
      className=" bg-black hover:bg-zinc-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
      onClick={(e) => {
        e.preventDefault();
        props.onClick();
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
