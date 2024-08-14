import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "./customSwiperStyles.css"
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "./constants.index";


const ActiveSlider = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-3 mt-6 md:mt-32 bg-gradient-to-tr">
        <div>
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-4 md:text-5xl text-3xl text-[#0b1056] font-bold">
            What People Say ??
          </h1>
        </div>

        <div className="relative inline-block pt-4 ">
          <span className="text-xl md:text-2xl text-[#0b1056] font-bold">
            Customer Review Section
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#0b1056] via-[#ad92ad] to-[#333669] rounded-full"></span>
        </div>
      </div>

      <div className="flex items-center md:mt-10 mt-2 flex-col mb-0 h-[530px]">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col gap-6 md:mb-16 mb-16 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] max-[480px]:w-3/4 max-[480px]:ml-12 overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-center bg-cover "
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />
                <div className="absolute inset-0 opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3">
                  <item.icon className="text-white group-hover:text-white w-[32px] h-[32px] mb-8" />
                  <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                  <p className="lg:text-[18px]">{item.content} </p>
                </div>
                <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-white group-hover:rotate-45 duration-100" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ActiveSlider;




