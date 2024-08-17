"use client"
import Typography from "@/components/typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Impacts } from "@/constant";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@/styles/about/index.scss";

export default function ImpactsCardSlider() {
	return (
		<>
			<Swiper
				slidesPerView={1.2}
				spaceBetween={20}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2.2,
						spaceBetween: 10,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}}
				pagination={{
					clickable: true,
				}}
                
				modules={[Pagination]}
				className="mySwiper "
			>
				{Impacts.map((impact, index) => (
					<SwiperSlide key={index} className="w-fit h-fit mt-5 md:mt-8" style={{paddingBottom: "40px"}}>
						<div className="max-w-[385px] min-h-[247px] flex flex-col justify-around">
							<Typography.p className="text-xl font-semibold leading-6 md:text-4xl md:leading-[48.6px]">
								{impact.H1}
							</Typography.p>
							<Typography.p className="text-base leading-5  font-light text-[#4c4b4bca]">
								{impact.content}
							</Typography.p>
							<div className="flex gap-3 mt-4">
								<div className="relative w-12 h-12 rounded-full">
									<Image
										src={impact.img}
										alt="logo"
										fill
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
										className="absolute top-0  rounded-full border border-solid border-orange-900"
									/>
								</div>
								<div>
									<p className="font-semibold text-base">{impact.name}</p>
									<p className="font-normal text-[12px]">{impact.role}</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
