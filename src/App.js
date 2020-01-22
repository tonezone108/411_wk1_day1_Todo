import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";

// const vals = ["name1", "name2", "name3"];

function App() {
  return (
    <div className="App">
      {/* {vals.map(value => {
        return <Todo name={value} />;
      })} */}
      <Todo />
    </div>
  );
}

export default App;
