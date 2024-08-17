"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Qualities } from "@/constant";
import Typography from "../../typography";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@/styles/about/index.scss"


export default function QualitiesCardSlider() {
	return (
		<>
			<Swiper
				slidesPerView={1.2}
				spaceBetween={5}
				breakpoints={{
					640: {
						slidesPerView: 1.6,
						spaceBetween: 10,
					  },
					  768: {
						slidesPerView: 2.5,
						spaceBetween: 10,
					  },
					  1024: {
						slidesPerView: 3.8,
						spaceBetween: 10,
					  },
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				{Qualities.map((quality, index) => (
					<SwiperSlide key={index}>
						<div
							className={`w-[17.625rem] h-[18.688rem] border-[3px] rounded-[24px] p-5 flex flex-col justify-between gap-6 bg-[#f8fff5] cursor-pointer ${
								"qaulity" + index
							} `}
							style={{ borderColor: quality.boda }}
						>
							<Typography.p
								className="text-[26px] leading-[27px]  md:text-[30px] md:leading-[30.36px] font-medium"
								style={{ color: quality.boda }}
							>
								{quality.H1}
							</Typography.p>
							<div className="self-end align-bottom font-normal flex flex-col">
								<Typography.p className="text-sm text-[#1E1E1A80] leading-[1.5em]">
									{quality.content}
								</Typography.p>
								<div
									className="w-12 h-12 rounded-full relative  flex items-center justify-center self-end img"
									style={{ color: quality.boda, backgroundColor: quality.boda }}
								>
									<Image
										src={quality.img}
										alt={quality.H1}
										width={50}
										height={50}
										style={{
											width: "60%",
											height: "60%",
											objectFit: "contain",
										}}
									/>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
