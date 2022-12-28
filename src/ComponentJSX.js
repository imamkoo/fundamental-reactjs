import React from "react";

const ComponentJSX = () => {
  //   return (
  //     <div className="flex flex-col text-center justify-center h-screen">
  //       <h1>Component JSX</h1>
  //       <p>Ini adalah Component JSX</p>
  //     </div>
  //   );

  return React.createElement(
    "div",
    { className: "flex flex-col text-center justify-center h-screen" },
    React.createElement("h1", null, "Component JSX"),
    React.createElement("p", null, "Ini adalah Component JSX"),
    React.createElement(
      "div",
      null,
      React.createElement("p", null, "Ini adalah Component JSX")
    )
  );
};

export default ComponentJSX;
