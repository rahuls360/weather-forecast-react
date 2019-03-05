import React from "react";

class Place extends React.Component {
  handleClick = () => {
    this.props.displayWeatherOfPlace(this.props.placeInfo.id);
  };
  render() {
    return (
      <div className="col-md-3 well" onClick={this.handleClick}>
        <h3 className="title">{this.props.placeInfo.name}</h3>
      </div>
    );
  }
}

export default Place;
