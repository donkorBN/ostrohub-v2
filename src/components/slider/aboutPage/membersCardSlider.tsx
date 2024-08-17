"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import Typography from "../../typography";
import { TeamMembers } from "@/constant";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@/styles/about/index.scss"


export default function MembersCardSlider (){
 
    return (
        <>
        <Swiper
				slidesPerView={2.8}
				spaceBetween={15}
				breakpoints={{
					640: {
						slidesPerView: 3,
						spaceBetween: 0,
					  },
					  768: {
						slidesPerView: 3.5,
						spaceBetween: 10,
					  },
					  1024: {
						slidesPerView: 4.5,
						spaceBetween: 43,
					  },
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper "
			>
        {TeamMembers.map((member, index)=>(
            <SwiperSlide key={index} className="w-fit h-fit mt-5 md:mt-8">
            <div className="text-center flex flex-col justify-center items-center gap-2" >
                <div className="w-[110px] h-[110px] md:w-[200px] md:h-[200px]">
                    <Image
                     src={member.img}
                     alt={member.role}
                     width={200}
                     height={200}
                     style={{width: "100%", height: "100%", objectFit: "contain"}}
                     />
                </div>
                <Typography.p className="text-base font-medium leading-[21px] md:text-xl lg:text-3xl">{member.role}</Typography.p>
            </div>
            </SwiperSlide>
        ))}
        
        </Swiper>
        </>
    )
}