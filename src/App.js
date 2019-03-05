import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Place from "./components/Place";

if (typeof window !== "undefined") {
  window.jQuery = window.$ = require("jquery");
  require("bootstrap");
}

class App extends Component {
  state = {
    places: {
      place1: { name: "Bangalore", id: "zzzz" },
      place2: { name: "Delhi", id: "zzzz" },
      place3: { name: "Mumbai", id: "zzzz" },
      place4: { name: "Chennai", id: "zzzz" }
    }
  };
  render() {
    return (
      <div id="weather">
        <div className="container">
          <div className="row">
            {Object.keys(this.state.places).map(key => {
              return <Place placeInfo={this.state.places[key]} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
