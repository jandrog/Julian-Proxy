import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

export default class Bar extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }
    
    render(){
        return(
            <div className = "bar">
            <div className = "block link">
                <div>
                Auto 
                </div>
                <div>
                Parts
                </div>
            </div>
            <div className = "block link">
                <div>
                Interior 
                </div>
                <div>
                Accessories
                </div>
            </div>
            <div className = "block link">
                <div>
                Exterior 
                </div>
                <div>
                Accessories
                </div>
            </div>
            <div className = "block link">
                <div>
                Truck &  
                </div>
                <div>
                Towing
                </div>
            </div>
            <div className = "block link">
                <div>
                Tools &  
                </div>
                <div>
                Equipment
                </div>
            </div>
            <div className = "block link">
                <div>
                Fluids & 
                </div>
                <div>
                Chemicals
                </div>
            </div>
            <div className = "block link">
                <div>
                Performance 
                </div>
                <div>
                Products
                </div>
            </div>
            <div className = "block link">
                <div>
                Repair 
                </div>
                <div>
                Help
                </div>
            </div>
            <div className = "block link">
                <div>
                Hot 
                </div>
                <div>
                Deals
                </div>
            </div>
        </div>
    )
  }
}