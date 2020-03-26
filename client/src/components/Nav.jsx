import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

export default class Nav extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    render(){
        return(
        <div className="banner">
            <div className = "header">
                <span className = "uppernavtext link">FIND A REPAIR SHOP</span> | <span className = "uppernavtext link">FOR THE PROFESSIONAL</span>
                <span className = "myZone right link">MyZone</span><span className = "right">|</span> <span className = "login right link">Log In</span>
            </div>
            <div className="grid-1">
                <div>
                     <img className="logo" src= "https://files.slack.com/files-pri/T2SVC7RB3-FV5NN3JVA/arrtozone.png"/>
                </div>
                <div>
                    <input type="text" className = "search" placeholder="Danielle's Search Bar"/>
                </div>
            </div>
            <div className="grid-2">
                <div>
                <span className = "text bold">My vehicles</span>
                </div>
                <div className = 'pad5'>
                <span className = "login link pad5">Add a Vehicle</span>
                </div>
            </div>
        </div>
    )
  }
}