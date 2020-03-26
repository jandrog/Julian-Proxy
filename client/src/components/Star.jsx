import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

export default class Star extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }
    
    render(){
        return(
        <div className="star">
           <img src="https://snipboard.io/CLR7GA.jpg"/>
        </div>
    )
  }
}