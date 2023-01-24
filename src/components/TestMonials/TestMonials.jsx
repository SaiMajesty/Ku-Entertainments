import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Navigation } from "swiper";
import Slider from "./Slider";

const TestMonials = () => {
  const testMonials =
  [
    {
      "_id": "635a0c0b64a6d231228952ae",
      "name": "Awlad Hossain",
      "img": "https://i.ibb.co/ZLnhzJ0/1.png",
      "review": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
      "_id": "635a0c0b64a6d231228962ae",
      "name": "Awlad Hossain",
      "img": "https://i.ibb.co/NxQg6kT/2.png",
      "review": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
      "_id": "635a0c0b64a6d231228972ae",
      "name": "Awlad Hossain",
      "img": "https://i.ibb.co/ZLnhzJ0/1.png",
      "review": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
      "_id": "635a0c0b64a6d231228982ae",
      "name": "Awlad Hossain",
      "img": "https://i.ibb.co/NxQg6kT/2.png",
      "review": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    }
  
  ]

  return (
    <div id="testmonials" className='container mx-auto my-20'>
      
    <div className="text-center">
      <h2 className="text-4xl uppercase font-semibold text-secondary">
      What Customer Says
      </h2>
    </div>
    <div className='mt-10'>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {
          testMonials.map(reviewSlide =>
            <SwiperSlide key={reviewSlide._id}>
              <Slider reviewSlide={reviewSlide} />
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  </div>
  );
};

export default TestMonials;

