import React, { Component } from "react";
import {Link} from 'react-router-dom';

class MissionPage extends Component {
  render() {
    return (
      <div
      className="flex-shrink-0"
        style={{
          position: 'fixed',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div>
          Harnessing Ottawa’s 3D printing community to make PPE for frontline workers fighting COVID
        </div>
        <div className="d-flex justify-content-end">
        <Link className="btn btn-dark" to="/WhatWeDo"> Learn More  
        <svg class="bi bi-arrow-bar-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M6 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H6.5A.5.5 0 016 8zm-2.5 6a.5.5 0 01-.5-.5v-11a.5.5 0 011 0v11a.5.5 0 01-.5.5z" clip-rule="evenodd"/>
</svg>
        </Link>
        </div>
      </div>
    );
  }
}


export default MissionPage;
