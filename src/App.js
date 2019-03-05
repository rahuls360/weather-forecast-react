import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

if (typeof window !== "undefined") {
  window.jQuery = window.$ = require("jquery");
  require("bootstrap");
}

class App extends Component {
  state = {
    places: {
      place1: { name: "Bangalore", id="zzzz" },
      place2: { name: "Delhi", id="zzzz" },
      place3: { name: "Mumbai", id="zzzz" },
      place4: { name: "Chennai", id="zzzz" },
    }
  }
  render() {
    return (
      <div id="weather">
        <div className="container">
          <div className="row">
            {Object.keys(this.state.places).map(place => {
              <Place placeInfo={place}></Place>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
