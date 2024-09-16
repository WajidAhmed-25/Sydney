import React, { useState, useEffect } from 'react';

import p1 from '../Main_Slider/g1.png';
import p2 from '../Main_Slider/g2.png';
import p3 from '../Main_Slider/g3.jpg';

import Badge2 from '../NDIS Badge/badge2';

const images = [
  {
    title: "Trusted NDIS specialist for disabled support.",
    image: p1,
    buttons: [
      { text: "ENQUIRE NOW", color: "orange" ,link:"/ContactUs"},
      { text: "CALL US NOW", color: "green",link:"/AboutUs"  }
    ]
  },
  {
    title: "Comprehensive NDIS support for your needs",
    image: p2,
    buttons: [
      { text: "LEARN MORE", color: "orange",link:"/AboutUs" },
      { text: "CONTACT US", color: "green",link:"/ContactUs" }
    ]
  },
  {
    title: "Professional care tailored to your requirements",
    image: p3,
    buttons: [
      { text: "GET STARTED", color: "orange",link:"/AboutUs" },
      { text: "BOOK CONSULTATION", color: "green",link:"/ContactUs"}
    ]
  }
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 4500); 
    return () => clearInterval(interval); 
  }, []);

  return (
    // <div className="relative w-full max-w-5xl mx-auto mt-32 bg-orange-400 ">
      <div className='relative w-full h-[70vh] max-sm:h-[90vh] sm:h-[90vh] md:h-[95vh] lg:h-[732px]  overflow-hidden border-b-4 border-[#0b1056]'>
    <Badge2/>
      <div className="relative flex items-center justify-center mt-8 overflow-hidden " style={{ height: '516px' }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute transition-transform duration-500  transform ${
              index === currentIndex
                ? 'scale-110 z-20'
                : 'scale-90 z-10 opacity-50'
            }`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <img
              src={image.image}
              alt={image.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              className='brightness-75'
            />
            {index === currentIndex && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                {/* <h2 className="mb-8 text-xl font-bold md:text-3xl text-white [text-shadow:#070a37)] ">{image.title}</h2> */}
                <h2 className="mb-8 text-xl font-bold text-white md:text-3xl" style={{ textShadow: '0 8px 8px #070a37' }}>
  {image.title}
</h2>

              
                <div className="flex space-x-12">
                  {image.buttons.map((button, i) => (
                    <a
                    href={button.link}
                      key={i}
                      className={`px-4 py-2 text-sm md:text-base bg-[#070a37] font-semibold transition duration-300 hover:scale-150 border-white/50 border-2 rounded`}
                    >
                      {button.text}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute z-30 p-4 text-white transform -translate-y-1/2 bg-[#070a37] rounded-full top-[65%] max-sm:p-2  max-md:p-2 left-2"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute z-30 p-4 bg-[#070a37] text-white transform -translate-y-1/2  rounded-full top-[65%] max-md:p-2 right-2 max-sm:p-2"
      >
        &#10095;
      </button>
    </div>
  );
}

export default ImageSlider;
