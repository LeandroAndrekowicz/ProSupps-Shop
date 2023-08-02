import React from 'react'
import './Carousel2.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick'

const Carousel2 = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
    <div className='carousel'>
        <Slider {...settings}>
        <div className='box'>
            <a href="/">
                <div className='aminoacidos'></div>
                <h3>Aminoacidos</h3>
            </a>
        </div>
        <div className='box'>
            <a href="/">
                <div className='carboidratos'></div>
                <h3>carboidratos</h3>
            </a>
        </div>
        <div className='box'>
            <a href="/">
                <div className='termogenico'></div>
                <h3>Termogenico</h3>
            </a>
        </div>
        <div className='box'>
            <a href="/">
                <div className='veganos'></div>
                <h3>Veganos</h3>
            </a>
        </div>
        <div className='box'>
            <a href="/">
                <div className='vegetarianos'></div>
                <h3>Vegetarianos</h3>
            </a>
        </div>
        <div className='box'>
            <a href="/">
                <div className='vitaminas'></div>
                <h3>Vitaminas</h3>
            </a>
        </div>
        </Slider>
    </div>

    </>
  )
}

export default Carousel2