import { Technologies } from "@/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@/styles/index.scss";

import { Pagination } from "swiper/modules";

export default function TechnogiesCardSlider() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Technologies.map((technology, index) => (
          <SwiperSlide key={index}>
            <Image
              src={technology.img}
              alt={technology.name}
              width={60}
              height={60}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
