"use client";
import Link from "next/link";
import Typography from "../typography";
import Image from "next/image";

export default function HeroSection() {
	return (
		<>
			<div className="max-h-[600px]  md:h-screen    flex justify-center gap-4   mt-[90px]">
				<div className="lg:w-2/5 flex flex-col gap-4  self-center ">
					<div className="mr-12 md:mr-0 flex flex-col gap-5 md:gap-4">
						<Typography.h1 className="leading-8 text-4xl">
							Empowering and Growing African Tech Talent
						</Typography.h1>
						<Typography.p className="text-base  md:text-2xl ">
							In our community we shear tips, tools and techniques for improving
							productivity. From the latest apps and software to time management
							strategies and goal-setting techniques...
						</Typography.p>
					</div>
					<Link
						href="/"
						className="bg-green-900 block w-[8rem] md:w-[13rem] text-base  md:text-3xl mt-8 py-[6px] md:py-3 self-center md:self-start text-center text-white hover:bg-green-700 hover:py-2 md:hover:py-4 transition-all ease-in delay-75  font-medium rounded-lg "
					>
						Join
					</Link>
					<Image
						src="/assets/idea.png"
						alt="Idea"
						width={150}
						height={127}
						className="absolute top-[100px] right-[1px] -z-30 md:hidden"
					/>
				</div>
				<div className="w-3/5 h-4/5 min-h-[500px] relative hidden lg:block  self-top ">
					<Image
						src="/assets/banner_img.jpeg"
						alt="banner"
						fill
						style={{ width: "100%", height: "100%" }}
						priority
						className="absolute top-0 z-20 object-cover"
					/>
					<Image
						src="/assets/idea.png"
						alt="Idea"
						width={210}
						height={200}
						className="absolute top-0 left-2 z-30"
					/>
				</div>
			</div>
		</>
	);
}
