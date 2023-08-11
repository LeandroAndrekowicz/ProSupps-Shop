import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './Carousel.css'

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel className='container-tudo' infiniteLoop={true} showStatus={false} autoPlay={true} renderIndicator={false} showArrows={false} showThumbs={false} >
                <div className='fixa'>
                    <div className='img-1'></div>
                </div>
                <div className='fixa'>
                    <div className='img-2'></div>
                </div>
                <div className='fixa'>
                    <div className='img-3'></div>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;