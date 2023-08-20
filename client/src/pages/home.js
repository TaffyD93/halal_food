import React from 'react';
import HomeCarousel from '../components/carousel';

export default function Home({ items }) {
  return (
    <div className='home-container'>
        <HomeCarousel/>
        <div className='homeText'>
            <h1> Welcome to Halal Food Finder! </h1>
            <p>This is a site that'll help you find all halal food around central London.</p>
            <div className='button'>
              <button className='homeButton'>Random recommendation</button>
              <button className='homeButton'>Restaurant</button>
            </div>
        </div>
    </div>
  );
}