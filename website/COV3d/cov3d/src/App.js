import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/FooterComp";
import Footer2 from "./Components/FooterComp2"
import MissionStatement from "./Components/InfoCards/MissionPage";
import WhatWeDoPage from "./Components/WhatWeDoPage";
import ContactUs from "./Components/ContactUsPage";


function App() {
  return (
    <Router>
      <div className="App">
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        >
        </link>
        <Header />
        <Route exact path="/" render={props=>(
          <React.Fragment>
            <MissionStatement/>
            <Footer />
          </React.Fragment>
        )}/>
        <Route exact path="/WhatWeDo" render={props=>(
          <React.Fragment>
            <WhatWeDoPage/>
            <Footer2 />
          </React.Fragment>
        )}/>
        <Route exact path="/GetInvolved" render={props=>(
          <React.Fragment>
            <Footer/>
          </React.Fragment>
        )}/>

        <Route exact path="/ContactUs" render={props=>(
          <React.Fragment>
            <ContactUs />
            <Footer2/>
          </React.Fragment>
        )}/>
        
      </div>
    </Router>
  );
}

export default App;
