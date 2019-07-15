import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <header className="main-header">
          <article className="title-logo">Start Bootstrap</article>
          <ul className="taskbar-list">
            <div className='links' >SERVICES</div> 
            <div className='links' >PORTFOLIO</div>
            <div className='links' >ABOUT</div>
            <div className='links' >TEAM</div>
            <div className='links' >CONTACT</div>   
          </ul>
        </header>
        <article className="welcome">Welcome To Our Studio!</article>
        <article className="meet-you">IT'S NICE TO MEET YOU</article>
        <button className="more-button">TELL ME MORE</button>
        <img className="main-pic" />
      </div>
    );
  }
}

export default Header;
