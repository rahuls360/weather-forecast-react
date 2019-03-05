import React from "react";

class Place extends React.Component {
  render() {
    return (
      <div className="col-md-3 well">
        {/* <h3 className="title">hi</h3> */}
        <h3 className="title">{this.props.placeInfo.name}</h3>
      </div>
    );
  }
}

export default Place;
