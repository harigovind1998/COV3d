import React, { Component } from "react";
import Cross from "../Images/HealthCross.png";
import Car from "../Images/car.png";
import Mask from "../Images/mask.png";
import Printer from "../Images/printer.png";

class LargeImgCluster extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ backgroundColor: "white", maxWidth: "100%" }}
      >
        <div className="d-flex justify-content-center align-items-end">
        <img src={Cross} style={{ height: 65, width: 65, marginLeft: 60 }} alt="COV3d"></img>
        <img src={Car} style={{ height: 69, width: 125,marginLeft: 60 }}></img>
        <img src={Mask} style={{ height: 65, width: 56, marginLeft: 60 }}></img>
        <img src={Printer} style={{ height: 82, width: 85, marginLeft: 60 }}></img>
        </div>
      </div>
    );
  }
}

const imgStyle = {
    margin : 25
}

export default LargeImgCluster;
