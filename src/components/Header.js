import React from "react";
import logo from "../assets/header.svg";

export default function Header() {
  const name = "Datang!";
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-4xl font-bold flex items-center justify-center pt-80">
        <h1>Selamat</h1>
        <img src={logo} alt="Logo" height={320} width={320} />
        <h1>{name}</h1>
      </div>
      <div className=" text-4xl w-1/3 text-center flex flex-col justify-center items-center py-4">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
          officiis voluptates suscipit cupiditate provident dolores beatae
          nesciunt corrupti in unde, ut consequatur, assumenda cum fugiat ipsa
          quos maxime quod earum!
        </p>
      </div>
    </div>
  );
}
