import Image from "next/image";
import Typography from "../typography";





export default function HeroSection() {
	return (
		<>
			<div className="max-h-[600px] relative min-h-[270px] h-[50vh]  md:h-[80vh]  justify-between md:flex items-center md:mt-[90px] mb-20 md:gap-10 md:px-7 lg:px-12">
				<div className="w-full absolute md:relative top-0  -z-10  md:z-0 h-full md:h-5/6 md:w-6/12  md:rounded-3xl  md:overflow-hidden">
					<Image
						src="/assets/about1.png"
                        fill
						alt="banner"
						style={{ width: "100%", height: "100%", objectFit:"cover"}}
                        className="absolute top-0 -z-20"
					/>
				</div>
				<div className=" md:w-6/12 h-full md:h-fit pt-8 md:pt-px  px-4 bg-gradient-to-b md:bg-none   from-[#D9D9D980] from-50%  via-[#53AE7D8C] via-54.8% to-[#FFFFFF] to-100%">
					<Typography.h1 className="text-black-900 md:text-green-900 font-bold font-[inika] pb-7">
						About us
					</Typography.h1>
					<Typography.p className=" font-normal md:font-medium text-base leading-[21.6px] md:text-2xl md:eading-[32.4px] text-[#000000]">
						Welcome to Out Tech Community, focused on Productivity! We are a
						group of individuals who are passionate about using technology to
						enhance productivity and help others do the same, this is what makes
						us a community.
					</Typography.p>
				</div>
			</div>
		</>
	);
}
