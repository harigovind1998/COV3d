import React, { Component } from 'react';
import ImgCluster from "./LargeImgCluster";
import Copyright from "./copyrightInfo";

class FooterComp extends Component {
    render() {
        return (
            <footer style={footerStyle}>

                <ImgCluster />
                
                <Copyright />
            </footer>
        );
    }
}

const footerStyle = {
    position : 'absolute',
    left: '0',
    bottom: '0',
    width: '100%',
    backgroundColor: "black",
    color: 'white',
    paddingTop:'0'
}

export default FooterComp;