import { Icon } from "@iconify/react/dist/iconify.js";
import Typography from "../typography";
import ImpactsCardSlider from "../slider/aboutPage/impactsCardSlider";

export default function ImapactSection() {
	return (
		<>
			<div className="py-8 px-4 md:px-7 lg:px-12 flex justify-between">
				<div className="relative">
					<Typography.h2 className="text-[34px] leading-[47px] md:text-[54px] md:leading-[65px] lg:text-[64px] lg:leading-[83px] font-bold">
						Our impact to the <br /> African Society
					</Typography.h2>
					<div className="w-[70px] h-[70px] md:w-[127px] md:h-[127px] bg-orange-900 rounded-full absolute -top-3 -left-1 md:-top-8 md:-left-3 -z-10"></div>
				</div>
				<div className="hidden md:flex justify-center items-center gap-5 ">
					<span className="w-8 h-8 rounded-full bg-[#1E1E1A80]  flex justify-center items-center transition-all ease-in-out duration-500 delay-200 hover:w-[38px]  hover:h-[38px]  hover:bg-orange-500 cursor-pointer">
						<Icon
							icon="tabler:arrow-left"
							className="w-11 h-10"
							style={{ color: "#ffffff" }}
						/>
					</span>
					<span className="w-14 h-14 rounded-full bg-black-900  flex justify-center items-center hover:bg-orange-900 transition-all ease-in-out duration-500 delay-200 hover:w-[60px]  hover:h-[60px] cursor-pointer">
						<Icon
							icon="tabler:arrow-right"
							className="w-16 h-12"
							style={{ color: "#ffffff" }}
						/>
					</span>
				</div>
			</div>
            <div className="px-4 md:px-7 lg:px-12 impact">
                <ImpactsCardSlider />
            </div>
		</>
	);
}
