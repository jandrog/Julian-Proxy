import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

export default class Ad extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    render(){
        return(
        <div className = "ad">
            <img className = "ad link" src="https://www.autozone.com/cdn/images/B2C/US/media/FY20/P08/Leaderboard/fy20p08-lead-relief-ndd-d.jpg"/>
        </div>
    )
  }
}