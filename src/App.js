import React, { Component } from "react";
import Axios from "axios";

import CanvasJSReact from './canvasjs.react';

import Place from "./components/Place";

import "bootstrap/dist/css/bootstrap.css";
if (typeof window !== "undefined") {
  window.jQuery = window.$ = require("jquery");
  require("bootstrap");
}

var CanvasJSChart = CanvasJSReact.CanvasJSChart;



class App extends Component {
  state = {
    places: {
      place1: { name: "Bangalore", id: "1277333" },
      place2: { name: "Delhi", id: "1273294" },
      place3: { name: "Mumbai", id: "1275339" },
      place4: { name: "Chennai", id: "1264527" }
    },
    weather: {},
    dataPoints: null
  };

  loadChartData = () => {
    let dataPoints = [];
    if(Object.keys(this.state.weather).length !== 0){
      this.state.weather.data.map(individualReading => {
        return dataPoints.push({x: new Date(individualReading.dt), y: individualReading.main.temp -273});
      });
    }
    this.setState({dataPoints: dataPoints});
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
        this.loadChartData();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Weather Forecast"
			},
			axisY: {
				title: "Temperature in *C",
				includeZero: false
			},
			axisX: {
				title: "Day of the Week",
				interval: 2
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: {y}%",
				dataPoints: this.state.dataPoints
			}]
    }
    let canvas= null;
    if(this.state.dataPoints){
      canvas = <CanvasJSChart options = {options} />
    }
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
            <div className="clearfix"></div>
          </div>
          <div className="row">
            {canvas}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
