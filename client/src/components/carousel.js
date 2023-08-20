import React from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel'; // Import Carousel component
import image1 from '../images/Bill_or_beak.jpeg'; // Import your images
import image2 from '../images/fried-chicken_2.0.jpeg';
import image3 from '../images/chicken-shawarma.jpeg';

export default function HomeCarousel() {
        return (
          <>
          <div className='homeImage'>
            <Carousel dynamicHeight={true} autoPlay={true} showStatus={false} showThumbs={false} >
                <div>
                    <img src={image1} alt='Bob Burger' />
                    <p className="legend">Bill or beak</p>
                </div>
                <div>
                    <img src={image2} alt='Chicken'/>
                    <p className="legend">Chicken Shop</p>
                </div>
                <div>
                    <img src={image3} alt="shawarma" />
                    <p className="legend">ShakeShuka</p>
                </div>
            </Carousel>
            </div>
            </>
        );
    }

