import React from 'react';
import Carousel from "../components/Carousel";
import Hero from '../components/Hero'

function PortfolioPage(props) {
  return (
    <div>
    <Hero title= {props.title} />
    <Carousel />
    </div>
  );
}

export default PortfolioPage;
