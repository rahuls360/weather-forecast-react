import React, { Component } from "react";
import Axios from "axios";

import Place from "./components/Place";

import "bootstrap/dist/css/bootstrap.css";
if (typeof window !== "undefined") {
  window.jQuery = window.$ = require("jquery");
  require("bootstrap");
}

var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
  state = {
    places: {
      place1: { name: "Bangalore", id: "1277333" },
      place2: { name: "Delhi", id: "1273294" },
      place3: { name: "Mumbai", id: "1275339" },
      place4: { name: "Chennai", id: "1264527" }
    },
    weather: {}
  };

  componentDidMount(){
    // <CanvasJSChart options = {options}
    //         /* onRef = {ref => this.chart = ref} */
    //     />
  }

  displayWeatherOfPlace = id => {
    Axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=${
        process.env.REACT_APP_WEATHER_API
      }`
    )
      .then(data => {
        console.log(data);
        const weather = {
          name: data.data.city.name,
          data: data.data.list,
        }
        this.setState({weather: weather});
      })
      .catch(err => {
        console.log(err);
      });
  };

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
                  displayWeatherOfPlace={this.displayWeatherOfPlace}
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
