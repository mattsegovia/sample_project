import React, { Component } from 'react';

import '../App.css'
import SiteCard from './SiteCard';
// import ReactDOM from 'react-dom';

class Content extends Component{

    // constructor(props) {
    //     super(props);
    //     // this.state = { counter: 0 };
    //     // this.handleClick = this.handleClick.bind(this);
    // }


    render(){
        return (
            <div className="home-screen">
                <SiteCard text="Newsreel" img={require("../assets/newsreel.jpg")} alt="Newsreel" desc="Disney Newsreel is a publication by and for the employees of The Walt Disney Company and its affiliated companies."></SiteCard>
                <SiteCard text="Employee Extras" img={require("../assets/extras.jpg")} alt="Employee Extras" desc="Employee events"></SiteCard>
            </div>
        )
    }
}
export default Content; 

