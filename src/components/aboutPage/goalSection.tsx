import { Mission } from "@/constant";
import Typography from "../typography";
import QualitiesCardSlider from "../slider/aboutPage/qualitiesCardSlider";

export default function GoalSection() {
	return (
		<>
			<div className="/ px-4 md:px-7 lg:px-12 ">
				{Mission.map((item, index) => (
					<div
						key={index}
						className="w-full flex flex-col items-center gap-[1rem] mb-4 md:mb-12 "
					>
						<Typography.h3 className="text-center font-semibold text-[#222222] text-[1.3rem] md:text-[2.3rem] leading-[1.7rem] md:leading-[3rem] font-[Clash Grotesk]">
							{item.h2}
						</Typography.h3>
						<div className="bg-[#C4C4C432] rounded-[1.6rem]">
							<Typography.p className="text-center font-normal text-[1rem] md:text-[1.5rem] leading-[1.4rem] md:leading-[2rem] font-[Clash Grotesk] text-[#000000] py-[1.5rem] px-[1.5rem]">
								{item.p}
							</Typography.p>
						</div>
					</div>
				))}
			</div>
			<div className="pt-5 qualities">
				<QualitiesCardSlider />
			</div>
		</>
	);
}
