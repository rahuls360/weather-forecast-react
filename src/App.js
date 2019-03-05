import React, { Component } from "react";
import Axios from "axios";

import Place from "./components/Place";

import "bootstrap/dist/css/bootstrap.css";
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

  componentDidMount() {
    Axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?id=1277333&APPID=${
        process.env.REACT_APP_WEATHER_API
      }`
    )
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="weather">
        <div className="container">
          <div className="row">
            {Object.keys(this.state.places).map(key => {
              return (
                <Place
                  placeInfo={this.state.places[key]}
                  key={key}
                  index={key}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
