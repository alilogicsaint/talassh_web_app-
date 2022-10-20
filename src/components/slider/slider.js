import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import placeholder from '../../Assets/images/placeholder.png'
// Import Swiper styles
import 'swiper/css';
import { ImageUpload } from '../imgUpandShow/uploadimage';




export default function MySliderSWP() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide> <ImageUpload Cheight={"170px"} CWidth={"100%"} imgLink={placeholder} /> </SwiperSlide>
      <SwiperSlide> <ImageUpload Cheight={"170px"} CWidth={"100%"} imgLink={placeholder} /> </SwiperSlide>
      <SwiperSlide> <ImageUpload Cheight={"170px"} CWidth={"100%"} imgLink={placeholder} /> </SwiperSlide>
      <SwiperSlide> <ImageUpload Cheight={"170px"} CWidth={"100%"} imgLink={placeholder} /> </SwiperSlide>
    </Swiper>
  );
};