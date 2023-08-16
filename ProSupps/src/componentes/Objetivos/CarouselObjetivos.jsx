import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Objetivos.css'


import Slider from 'react-slick'    

const CarouselObjetivos = () => {
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
    <div className='carousel'>
        <Slider {...settings}>
        <div className='box'>
            <a href="/objetivos/massa-muscular">
                <div className='massamuscular'></div>
                <h3>Massa Muscular</h3>
            </a>
        </div>
        <div className='box'>
            <a href="/objetivos/emagrecimento">
                <div className='emagrecimento'></div>
                <h3>Emagrecimento</h3>
            </a>
        </div>
        <div className='box'>
            <a href="/objetivos/energia">
                <div className='energia'></div>
                <h3>Energia</h3>
            </a>
        </div>
        <div className='box'>
            <a href="/objetivos/qualidade-de-vida">
                <div className='qualidadevida'></div>
                <h3>Qualidade de Vida</h3>
            </a>
        </div>
        </Slider>
    </div>
  )
}

export default CarouselObjetivos