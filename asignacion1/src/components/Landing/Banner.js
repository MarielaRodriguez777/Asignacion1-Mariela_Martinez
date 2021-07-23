import React from 'react';
import Carousel from 'nuka-carousel';
import '../../styles/css/index/index.css'


export class Banner extends React.Component{

  render() {
    return (
      <div className="banner">
        <Carousel style={{height:"87vh", width:"100%"}}>
          <img style={{height:"87vh"}} src={`./images/slider/slider.jpg`} alt="slider"/>
          <img style={{height:"87vh"}} src={`./images/slider/slider1.jpg`} alt="slider"/>
          <img style={{height:"87vh"}} src={`./images/slider/slider2.jpg`} alt="slider"/>
          <img style={{height:"87vh"}} src={`./images/slider/slider3.jpg`} alt="slider"/>
          <img style={{height:"87vh"}} src={`./images/slider/slider4.jpg`} alt="slider"/>
          <img style={{height:"87vh"}} src={`./images/slider/slider5.jpg`} alt="slider"/>
        </Carousel>

      </div>
    );
  }
}

