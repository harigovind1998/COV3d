import React, { Component } from 'react';
import Avatar from "../Images/img_avatar1.png"

class PersonCards extends Component {
    render() {
        return (
            <div className="card" style={{width:"400px", margin:"10px"}}>
                <img className="card-img-top" src={Avatar} alt="Card image"/>
                <div className="card-body">
                    <h4 className="card-title">{this.props.name}</h4>
                    <p className="card-text">{this.props.info}</p>
                </div>
            </div>

        );
    }
}

export default PersonCards;