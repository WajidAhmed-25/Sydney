import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const cards = [

  {
    title: "Before & After School Program",
    description: "We give your child a good start through educational mornings and fun afternoons. Our programs are super interactive by keeping the kids socially.",
    image: "https://images.creativemarket.com/0.1.0/ps/6486502/1820/1214/m1/fpnw/wm0/logo-file-21-.jpg?1559615905&s=5750fc62dbc6d44c43bb07e174b50987"
  },

  {
    title: "Community Access Program",
    description: "At Arch Care, participants are given an opportunity to participate in innovative community programs which not only enhance inclusivity",
    image: "https://images.creativemarket.com/0.1.0/ps/6486502/1820/1214/m1/fpnw/wm0/logo-file-21-.jpg?1559615905&s=5750fc62dbc6d44c43bb07e174b50987"
  },
  {
    title: "Community Access Program",
    description: "At Arch Care, participants are given an opportunity to participate in innovative community programs which not only enhance inclusivity",
    image: "https://images.creativemarket.com/0.1.0/ps/6486502/1820/1214/m1/fpnw/wm0/logo-file-21-.jpg?1559615905&s=5750fc62dbc6d44c43bb07e174b50987"
  },
  {
    title: "Community Access Program",
    description: "At Arch Care, participants are given an opportunity to participate in innovative community programs which not only enhance inclusivity",
    image: "https://images.creativemarket.com/0.1.0/ps/6486502/1820/1214/m1/fpnw/wm0/logo-file-21-.jpg?1559615905&s=5750fc62dbc6d44c43bb07e174b50987"
  },
  {
    title: "Community Access Program",
    description: "At Arch Care, participants are given an opportunity to participate in innovative community programs which not only enhance inclusivity",
    image: "https://images.creativemarket.com/0.1.0/ps/6486502/1820/1214/m1/fpnw/wm0/logo-file-21-.jpg?1559615905&s=5750fc62dbc6d44c43bb07e174b50987"
  },
  {
    title: "Community Access Program",
    description: "At Arch Care, participants are given an opportunity to participate in innovative community programs which not only enhance inclusivity",
    image: "https://images.creativemarket.com/0.1.0/ps/6486502/1820/1214/m1/fpnw/wm0/logo-file-21-.jpg?1559615905&s=5750fc62dbc6d44c43bb07e174b50987"
  },
  {
    title: "Community Access Program",
    description: "At Arch Care, participants are given an opportunity to participate in innovative community programs which not only enhance inclusivity",
    image: "https://images.creativemarket.com/0.1.0/ps/6486502/1820/1214/m1/fpnw/wm0/logo-file-21-.jpg?1559615905&s=5750fc62dbc6d44c43bb07e174b50987"
  },
  {
    title: "Community Access Program",
    description: "At Arch Care, participants are given an opportunity to participate in innovative community programs which not only enhance inclusivity",
    image: "https://images.creativemarket.com/0.1.0/ps/6486502/1820/1214/m1/fpnw/wm0/logo-file-21-.jpg?1559615905&s=5750fc62dbc6d44c43bb07e174b50987"
  },
  {
    title: "Community Access Program",
    description: "At Arch Care, participants are given an opportunity to participate in innovative community programs which not only enhance inclusivity",
    image: "https://images.creativemarket.com/0.1.0/ps/6486502/1820/1214/m1/fpnw/wm0/logo-file-21-.jpg?1559615905&s=5750fc62dbc6d44c43bb07e174b50987"
  },
  {
    title: "Community Access Program",
    description: "At Arch Care, participants are given an opportunity to participate in innovative community programs which not only enhance inclusivity",
    image: "https://images.creativemarket.com/0.1.0/ps/6486502/1820/1214/m1/fpnw/wm0/logo-file-21-.jpg?1559615905&s=5750fc62dbc6d44c43bb07e174b50987"
  },
  {
    title: "Community Access Program",
    description: "At Arch Care, participants are given an opportunity to participate in innovative community programs which not only enhance inclusivity",
    image: "https://images.creativemarket.com/0.1.0/ps/6486502/1820/1214/m1/fpnw/wm0/logo-file-21-.jpg?1559615905&s=5750fc62dbc6d44c43bb07e174b50987"
  },
  {
    title: "Community Access Program",
    description: "At Arch Care, participants are given an opportunity to participate in innovative community programs which not only enhance inclusivity",
    image: "https://images.creativemarket.com/0.1.0/ps/6486502/1820/1214/m1/fpnw/wm0/logo-file-21-.jpg?1559615905&s=5750fc62dbc6d44c43bb07e174b50987"
  },
  {
    title: "Community Access Program",
    description: "At Arch Care, participants are given an opportunity to participate in innovative community programs which not only enhance inclusivity",
    image: "https://images.creativemarket.com/0.1.0/ps/6486502/1820/1214/m1/fpnw/wm0/logo-file-21-.jpg?1559615905&s=5750fc62dbc6d44c43bb07e174b50987"
  },
  {
    title: "Community Access Program",
    description: "At Arch Care, participants are given an opportunity to participate in innovative community programs which not only enhance inclusivity",
    image: "https://images.creativemarket.com/0.1.0/ps/6486502/1820/1214/m1/fpnw/wm0/logo-file-21-.jpg?1559615905&s=5750fc62dbc6d44c43bb07e174b50987"
  },
  {
    title: "Community Access Program",
    description: "At Arch Care, participants are given an opportunity to participate in innovative community programs which not only enhance inclusivity",
    image: "https://images.creativemarket.com/0.1.0/ps/6486502/1820/1214/m1/fpnw/wm0/logo-file-21-.jpg?1559615905&s=5750fc62dbc6d44c43bb07e174b50987"
  },
];

const MainSlider2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (cards.length - 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length - 4) % (cards.length - 4));
  };

  return (

    <>





      <div>
        <h2 class="flex flex-row flex-nowrap items-center mt-6">
          <span class="flex-grow block border-t border-[#7e387d] border-2"></span>
          <span class="flex-none block mx-4 px-16 py-3.5 text-md rounded leading-none font-medium  bg-[#7e387d] text-white">
            Workings
          </span>
          <span class="flex-grow block border-t border-2 border-[#7e387d]"></span>
        </h2>
      </div>


      <div className="relative w-full px-4 mx-auto mt-20 mb-8 max-w-7xl">


        <div className="overflow-hidden">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
            {cards.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-1/5 px-2">
                <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                  <img src={card.image} alt={card.title} className="object-cover w-full h-48" />
                  <div className="p-4 text-white bg-gradient-to-br from-[#773876] to-indigo-900 ">
                    <h3 className="mb-2 text-xl font-semibold">{card.title}</h3>
                    <p className="text-sm">{card.description}</p>
                    <div className='flex justify-center w-full '>
                      <button class="px-4 py-2 mt-4 bg-white tracking-wide hover:bg-[#141514df] hover:border-2  text-gray-800 font-bold rounded-full border-b-4 border-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#ffffff] to-[#ffffff] hover:border-white  hover:text-white shadow-md  inline-flex items-center">
                        <span class="mx-auto text-lg hover:text-white">+</span>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute -left-6 p-2 transform -translate-y-1/2 rounded-l-lg bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#834a86f7] to-[#7e387d] shadow-md top-1/2 hover:bg-blue-700"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-6 p-2 transform -translate-y-1/2 bg-blue-600 rounded-r-lg shadow-md top-1/2 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#834a86f7] to-[#7e387d] hover:bg-blue-700"
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>
      </div>

    </>
  );
};

export default MainSlider2;











//-------------------------------------------------------------------------------------------------------------------------------------//


































