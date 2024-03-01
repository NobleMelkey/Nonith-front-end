import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../src/pic/Screenshot 2024-02-29 232157.png';

const SlideImg = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 1800,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={slide1} alt="Slide 1"   />
      </div>
      <div>
        <img src={slide1} alt="Slide 2"   />
      </div>
      <div>
        <img src={slide1} alt="Slide 2"  />
      </div>
    </Slider>
  );
};

export default SlideImg;