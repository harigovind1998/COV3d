import React, { Component } from "react";
import { Link } from "react-router-dom";
import Brand from "./Brand";

class Header extends Component {
  render() {
    return (
      // <header style={headerStyle}>

      //     <Brand/>
      //     <nav>
      //         <Link style={linkStyle}>MISSION</Link>
      //         <Link style={linkStyle}>WHAT WE DO</Link>
      //         <Link style={linkStyle}>GET INVOLVED</Link>
      //     </nav>

      // </header>

      // <nav className="navbar navbar-expand-lg">
      //   <Brand/>
      //   <div>
      //     <ul className="navbar-nav mr-auto">
      //       <li className="nav-item active">
      //         <Link className="nav-link" style={linkStyle}>
      //           MISSION
      //         </Link>
      //       </li>
      //       <li className="nav-item active">
      //         <Link className="nav-link" style={linkStyle}>
      //           WHAT WE DO
      //         </Link>
      //       </li>
      //       <li className="nav-item active">
      //         <Link className="nav-link" style={linkStyle}>
      //           GET INVOLVED
      //         </Link>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>

      // <nav>
      //   <div className="d-flex justify-content-between">

      //       <div className="d-flex justify-content-start">
      //         <Link className="nav-link" style={linkStyle}>
      //           MISSION
      //         </Link>

      //         <Link className="nav-link" style={linkStyle}>
      //           WHAT WE DO
      //         </Link>

      //         <Link className="nav-link" style={linkStyle}>
      //           GET INVOLVED
      //         </Link>
      //       </div>
      //     <Brand/>
      //     <Link className="nav-link" style ={linkStyle}>
      //       CONTACT US
      //     </Link>
      //   </div>
      // </nav>
      <nav>
        <div className="d-flex justify-content-between align-items-center" style={{zIndex:0, height: '75px'}}>

            <div className="d-flex justify-content-start align-items-center">
              <Link className="nav-link" to="/" style={linkStyle}>
                MISSION
              </Link>

              <Link className="nav-link" to="/WhatWeDo"style={linkStyle}>
                WHAT WE DO
              </Link>

              <Link className="nav-link" to="/GetInvolved"style={linkStyle}>
                GET INVOLVED
              </Link>
            </div>
            <Brand/>

          <Link className="nav-link"  to="/ContactUs" style ={linkStyle}>
            CONTACT US
          </Link>
        </div>
      </nav>
    );
  }
}

const linkStyle = {
  color: "#000",
  verticalAlign:'bottom'
};

export default Header;
