import React, { Component } from "react";
import PersonCard from "./PersonCards";

class ContactUsPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm d-flex justify-content-center">
            <PersonCard name="Teed 1" info="Elec Eng, future Einstine?" />
          </div>
          <div className="col-sm d-flex justify-content-center">
            <PersonCard name="Teed 2" info="Future Doctor? Curer of Cancer?" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm d-flex justify-content-center">
            <PersonCard name="Faiyaz" info="????" />
          </div>
          <div className="col-sm d-flex  justify-content-center">
            <PersonCard name="Hari" info="Reptile in a human skin?" />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUsPage;
