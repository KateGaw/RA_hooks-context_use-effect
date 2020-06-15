import React from "react";
import "./App.css";

import List from "./components/List";

function App() {
  return (
    <div className="container">
      <div className="background-element"> </div>{" "}
      <div className="highlight-window">
        <div className="highlight-overlay"> </div>{" "}
      </div>{" "}
      <div className="window">
        <List />
      </div>{" "}
    </div>
  );
}

export default App;
