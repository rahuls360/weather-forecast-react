import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

if (typeof window !== "undefined") {
  window.jQuery = window.$ = require("jquery");
  require("bootstrap");
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hi</h1>
      </div>
    );
  }
}

export default App;
