import React, { Component } from "react";
import './body.css'

class Body extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <article>
        <article className='services-section'>SERVICES</article>
        <article className='services-text'>Lorem ipsum dolor sit amet consectetur.</article>
        <i className="fas fa-shopping-cart"></i>
        <article className='text'>EY</article>
        

      </article>
    );
  }
}

export default Body;
