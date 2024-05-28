import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/carousel.css'; 
import { Image1,Image2,Image3 } from '../assets'
import styles from '../style';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    Image1,Image2,Image3
  ];

  return (
    <div className={`carousel-container ${styles.boxWidth} rounded-xl`}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="image-container rounded-xl">
            <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
