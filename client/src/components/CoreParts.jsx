import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

export default class CoreParts extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }
    
    render(){
        return(
        <div id='core'>
            <div className="coreboxleft">
                <div className="descriptimage"></div>
                <div className = "labeltext text">CORE PARTS</div>
                <div className = "descripttext text height50">Return core parts to the store to be refunded the price</div>
                <div className = "link text underline descripttext">Core Parts Policy</div>
            </div>
            <div className="corebox">
                <div className="descriptimage"></div>
                <div className = "labeltext text">FREE SHIPPING</div>
                <div className = "descripttext text height50">Orders $35 or greater, includes APO, FPO, DPO addresses</div>
                <div className = "link text underline descripttext">Get More Details</div>            
            </div>
            <div className="corebox">
                <div className="descriptimage"></div>
                <div className = "labeltext text">RETURN ANYWHERE</div>
                <div className = "descripttext text height50">Buy Online, Return Anywhere</div>
                <div className = "link text underline descripttext">Get More Details</div>
            </div>
            <div className="coreboxborderless">
                <div className="descriptimage"></div>
                <div className = "labeltext text">SAME-DAY STORE PICKUP</div>
                <div className = "descripttext text height50">Save time by buying online and picking up items in store</div>
                <div className = "link text underline descripttext">Learn More</div>
            </div>
        </div>
    )
  }
}