import Header from "./components/Header";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import Navbar from "./components/Navbar";
import ComponentJSX from "./ComponentJSX";
import UserClass from "./components/Items/UserClass";
import UserFunction from "./components/Items/UserFunction";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import List from "./pages/List";
import Conditional from "./pages/Conditional";
import Styling from "./pages/Styling";
import EventHandlerClass from "./pages/EventHandlerClass";

function App() {
  return (
    <div>
      {/* <Navbar />
      <Header />
      <ClassComponent />
      <FunctionalComponent />
      <ComponentJSX />
      <div className=" h-screen flex flex-col justify-center ">
        <UserClass name="Name" email="email@gmail.com" />
        <UserFunction name="Name" email="email@gmail.com" />
      </div>
      <Home />
      <Dashboard />
      <List />
      <Conditional />
      <Styling /> */}
      <EventHandlerClass />
    </div>
  );
}

export default App;
