import React, { Component } from 'react';
import Summary from "./ProcessSummary";
import TaskBreakdown from "./trial";

class WhatWeDoPage extends Component {
    render() {
        return (
            <div className="container" style={{marginTop: "25px"}}>
                <Summary />
                <div className="card row"style={{backgroundColor:"#F0F0F0", marginTop: "15px", height: "500px", paddingTop: "250px"}}>
                    <TaskBreakdown />     
                </div>         
                <div className="shadow p-3 mb-5 bg-white rounded"style={{backgroundColor:"#F0F0F0", marginTop: "15px", height: "500px", paddingTop: "250px"}}>
                    print option 1    
                </div>
                <div className="shadow p-3 mb-5 bg-white rounded"style={{backgroundColor:"#F0F0F0", marginTop: "15px", height: "500px", paddingTop: "250px"}}>
                    print option 2
                </div> 

            </div>
        );
    }
}

export default WhatWeDoPage;