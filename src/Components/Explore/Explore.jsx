import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';      
import  { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Explore.css";

import { Autoplay,EffectCoverflow, Pagination, Navigation } from "swiper";
function Explore() {
  return (
    <div>
        <section className="explore">
        <div className="para1 row">
        <FontAwesomeIcon icon={['fab', 'apple']} />
            <h5 className="hed">NEW EXPLORE</h5>
            <h1 className="featurette-heading mb-5 text-light">Explore All</h1>
          </div>
        </section>
  
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true, 
        }}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay,EffectCoverflow,Pagination, Navigation]}
          
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./images/Lion (1).png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Lion (2).png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Lion (3).png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Lion (4).png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Lion (5).png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Lion (6).png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Lion (7).png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Lion (8).png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Lion (9).png" />
        </SwiperSlide>
      </Swiper>

</div>
 ) }
export default Explore
