import React, { Component } from 'react';
import Logo from '../Images/covidLogo.png';

class Brand extends Component {
    render() {
        return (
            <div className='navbar-brand' >
                <img src={Logo} style={brand} alt="COV3d"></img>
            </div>
        );
    }
}

const brand={
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    heigh: '75px',
    width: '337px',
    top: "0",
    zIndex: '1'
}

export default Brand;