import React, { Component } from 'react';
import '../styles/SiteCard.css'
// import ReactDOM from 'react-dom';

class SiteCard extends Component{

    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        // this.handleClick = this.handleClick.bind(this);
    }

    render(){        
        return (
            <div className="site-card">
                <img className="img-preview" alt={this.props.alt} src={this.props.img}></img>
                <div className="content">
                    <h3>{this.props.text}</h3>
                    <p className="desc">{this.props.desc}</p>
                </div>
                
            </div>
        )
    }
}
export default SiteCard; 

