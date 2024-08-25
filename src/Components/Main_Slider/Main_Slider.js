import React, { useState, useEffect, useCallback } from 'react';
import p1 from './g1.png'
import p2 from './g2.png'
import p3 from './g3.jpg'

import Badge2 from '../NDIS Badge/badge2';

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Trusted NDIS specialist that offers professional assistance to disabled people",
      // image: "https://u-static.fotor.com/images/text-to-image/result/PRO-18774e0dcbdd44e882473c835d1523b2.jpg",
      image:p1,
      buttons: [
        { text: "ENQUIRE NOW", color: "orange" },
        { text: "CALL US NOW", color: "green" }
      ]
    },
    {
      title: "Comprehensive NDIS support for your needs",
      // image: "https://img.getimg.ai/generated/img-JyLMMjwFSqhtQJQtXGone.jpeg",
      image:p2,
      buttons: [
        { text: "LEARN MORE", color: "orange" },
        { text: "CONTACT US", color: "green" }
      ]
    },
    {
      title: "Professional care tailored to your requirements",
      // image: "https://img.getimg.ai/generated/img-OtyL3knXLf52KqdYdCBgk.jpeg",
      image:p3,
      buttons: [
        { text: "GET STARTED", color: "orange" },
        { text: "BOOK CONSULTATION", color: "green" }
      ]
    }
  ];
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (

  <>



    <div className="relative w-full h-[50vh] max-sm:h-[80vh] sm:h-[80vh] md:h-[95vh] lg:h-[730px]  overflow-hidden border-b-4 border-[#0b1056]">
   
    <Badge2/>
    
    <div
      className="flex h-full transition-transform duration-300 ease-in-out max-lg:bg-orange-300"
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative flex-shrink-0 w-full h-full ">
          <img src={slide.image} alt={slide.title} className="object-cover w-full h-full mt-16 " />
      



<div className="absolute inset-0 flex items-center  w-[90%]">
  <div className="px-4 mx-auto text-white  w-[70%] md:px-8 lg:ml-16 lg:mr-auto space-y-8">
    <h2 className="pt-4 pl-6 mb-12 text-lg font-bold leading-loose sm:text-2xl md:text-3xl lg:text-5xl lg:mb-6">
      {slide.title}
    </h2>
    <div className="flex flex-wrap gap-4 ">
      {slide.buttons.map((button, btnIndex) => (
        <button 
          key={btnIndex}
          className={`bg-[rgb(27,30,68)] hover:bg-black ml-4 hover:font-semibold font-bold hover:text-white hover:border-2 hover:border-white text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded transition duration-300 text-[10px] sm:text-base md:text-lg`}
        >
          {button.text}
        </button>
      ))}
    </div>
  </div>
</div>



          
        </div>
      ))}
    </div>
    
    <button 
      onClick={prevSlide}
      className="absolute p-1 transform -translate-y-1/2 bg-white rounded-full shadow sm:p-2 top-1/2 left-2 sm:left-4 hover:bg-gray-100 focus:outline-none"
      aria-label="Previous slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button 
      onClick={nextSlide}
      className="absolute p-1 transform -translate-y-1/2 bg-white rounded-full shadow sm:p-2 top-1/2 right-2 sm:right-4 hover:bg-gray-100 focus:outline-none"
      aria-label="Next slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
  </> 
  ); 
};

export default MainSlider;























//====================================================================================================================================//

