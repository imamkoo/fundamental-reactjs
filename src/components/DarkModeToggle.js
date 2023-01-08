import React from "react";
import { useState, useEffect } from "react";
import Sun from "./sun";
import Moon from "./moon";

function DarkModeToggle(props) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  let component;
  if (theme === "dark") {
    component = <Sun />;
    // component = <p>Light Mode</p>;
  } else {
    component = <Moon />;
    // component = <p>Dark Mode</p>;
  }

  return (
    // <div className="h-10 w-32 dark:text-black dark:bg-white text-white bg-black hover:bg-zinc-800  dark:hover:bg-zinc-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 cursor-pointer">
    <div className=" h-10 w-32 cursor-pointer  focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-1.5 py-0.5 text-center mr-3 md:mr-0 ">
      <button onClick={toggleSwitch}>{component}</button>
    </div>
  );
}
export default DarkModeToggle;
