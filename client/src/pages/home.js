import React from 'react';
import Carousel from '../components/carousel';

export default function Home({ items }) {
  return (
    <div className='home-container'>
        <Carousel />
        <div className='homeText'>
            <h1> Welcome to Halal Food Finder! </h1>
            <p>This is a site that'll help you find all halal food around central London.</p>
            <button className='homeButton'>Random recommendation</button>
            <button className='homeButton'>Restaurant</button>
        </div>
    </div>
  );
}