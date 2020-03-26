import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

export default class Image extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    render(){
        return(
        <div>
           <span className = "image">
               <img className = "wheelimage" src="https://files.slack.com/files-pri/T2SVC7RB3-F010SRD9AN9/bejewelledwheel.png"/>
           </span>
        </div>
    )
  }
}