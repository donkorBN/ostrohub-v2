"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Typography from "../typography";

export default function NavbarMobile() {
	const [navbarToggle, setNavbarToggle] = useState(false);
	const pathname = usePathname();
	const isActive = (href: string) => pathname === href;
	return (
		<>
			<nav className="w-full fixed z-40 px-4 top-0  py-3 flex justify-between items-center shadow-md md:hidden bg-white">
				<div className="">
					<Link href={"/"}>
						<Image
							src="/assets/OstroHublogo.png"
							alt="logo"
							width={120}
							height={38}
						/>
					</Link>
				</div>
				<div>
					{navbarToggle ? (
						<div
							className="w-8 h-8 bg-black-900  rounded-full flex flex-col justify-center items-center relative  cursor-pointer z-50"
							onClick={() => setNavbarToggle(!navbarToggle)}
						>
							<Icon
								icon="ic:round-close"
								width="1.2em"
								height="1.2em"
								className="z-[999]"
								style={{ color: "#ffffff" }}
							/>
						</div>
					) : (
						<div
							className="w-8 h-8 bg-black-900 rounded-full flex flex-col justify-center items-center gap-[2px] cursor-pointer"
							onClick={() => setNavbarToggle(!navbarToggle)}
						>
							<Icon
								icon="icon-park-outline:hamburger-button"
								width="1.2em"
								height="1.2em"
								style={{ color: "#ffffff" }}
							/>
						</div>
					)}
				</div>
				<div
					className={`${
						navbarToggle
							? "top-0 right-0 opacity-100"
							: "-right-96 opacity-0 top-[71px]"
					} w-[80vw] h-[100vh] fixed z-40 ease-in-out transition-all duration-500 delay-200  bg-[#f7e1c0e3] pl-8 after:content-[attr(after)] after:block after:w-screen after:h-screen after:absolute after:top-0 after:blur-lg after:-left-20 after:opacity-20 `}
				>
					<div>
						{/* <Image src={"/assets/split_logo.png"} alt="split logo" width={200} height={200} /> */}
						<div className=" mt-24">
							<ul className="flex flex-col gap-7 text-xl font-semibold">
								<li className={isActive("/") ? "text-[#01AD4F]" : ""}>
									<Link href="/">Home</Link>
								</li>
								<li className={isActive("/aboout") ? "text-[#01AD4F]" : ""}>
									<Link href="/about">About</Link>
								</li>
								<li className={isActive("/contact") ? "text-[#01AD4F]" : ""}>
									<Link href="/contact">Home</Link>
								</li>
							</ul>
						</div>
						<div className="flex justify-center items-center w-full  gap-3 flex-col-reverse self-center mt-8">
							<div className="h-8 w-56 bg-black-100 self-start flex items-center md:justify-center gap-8">
								<Icon
									icon="fa6-brands:square-x-twitter"
									className="w-6 h-8 md:w-8 md:h-10"
									style={{ color: "#000000" }}
								/>
								<Icon
									icon="teenyicons:instagram-solid"
									className="w-6 h-8 md:w-8 md:h-10"
									style={{ color: "#000000" }}
								/>
								<Icon
									icon="teenyicons:linkedin-solid"
									className="w-6 h-8 md:w-8 md:h-10"
									style={{ color: "#000000" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
