import React from 'react';
import Slider from 'react-slick';
import { carouselCards, assets } from '../assets/assets.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <img src={assets.right} alt="Next" className="w-16 h-16" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <img src={assets.left} alt="Previous" className="w-16 h-16" />
  </div>
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full max-w-5xl px-6 py-12 mx-auto">
      <Slider {...settings}>
        {carouselCards.map((card, index) => (
          <div key={index} className="p-4">
            <div className="bg-transparent w-full border-black border-2 rounded-3xl shadow-lg p-10 px-0 md:p-12 text-center h-full flex flex-col justify-between">
              <div>
                <h2 className="text-4xl text-left md:text-5xl font-bold text-[#064e3b] uppercase mb-1">
                  {card.title1 + ','}
                </h2>
                <h2 className="text-4xl md:text-5xl text-left font-bold text-[#0e9a6f] uppercase mt-0">
                  {card.title2}
                </h2>
              </div>
              <div className="mt-6 italic font-[Inika] text-[#137682] text-lg md:text-xl">
                <p>"{card.quote}"</p>
                <p className="not-italic text-right mt-4">{card.author}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;


