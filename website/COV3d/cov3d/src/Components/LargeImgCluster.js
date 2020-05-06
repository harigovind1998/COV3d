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
        <div className="d-flex justify-content-between align-items-end">
        <img src={Cross} style={{ height: 181.82, width: 181.82 }} alt="COV3d"></img>
        <img src={Car} style={{ height: 190.66, width: 345.88 }}></img>
        <img src={Mask} style={{ height: 181, width: 154 }}></img>
        <img src={Printer} style={{ height: 229.89, width: 236.09 }}></img>
        </div>
      </div>
      //   <div className="d-flex justify-content-between">
      //     <img src={Cross} style={{ heigh: 181.82, width: 181.82 }} alt="COV3d"></img>
      //     <img src={Car} style={{ heigh: 345.88, width: 190.66 }}></img>
      //     <img src={Mask} style={{ heigh: 154, width: 181 }}></img>
      //     <img src={Printer} style={{ heigh: 236.09, width: 229.89 }}></img>
      //   </div>

      //     <div className="row align-items-end" >
      //     <div className="col-sm">
      //     <img src={Cross} style={{ height: 181.82, width: 181.82 }} alt="COV3d"></img>
      //     </div>
      //     <div className="col-sm">
      //     <img src={Car} style={{ height: 190.66, width: 345.88 }}></img>
      //     </div>
      //     <div className="col-sm">
      //     <img src={Mask} style={{ height: 181, width: 154 }}></img>
      //     </div>
      //     <div className="col-sm">
      //     <img src={Printer} style={{ height: 229.89, width: 236.09 }}></img>
      //     </div>
      // </div>
    );
  }
}

export default LargeImgCluster;
