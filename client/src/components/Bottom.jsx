import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

export default class Bottom extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }
    
    render(){
        return(
        <div id='bottom'>
           <img src="https://i.snipboard.io/cqXMN4.jpg" className = "bottomimage"></img>
        </div>
    )
  }
}