"use client";
import { FC, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@iconify/react";
import favicon from "@/app/favicon.ico"

interface NavItemProps {
	href: string;
	children: React.ReactNode;
}
interface NavbarToggleIconProps {
	isOpen: boolean;
	onClick: () => void;
}

const SocialIcons = () => (
	<div className="flex items-center w-full gap-3 mt-8">
		<div className="h-8 w-56 bg-black-100 flex items-center gap-6">
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
);

const NavItem: FC<NavItemProps> = ({ href, children }) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<li className={isActive ? "text-[#01AD4F]" : ""}>
			<Link href={href}>{children}</Link>
		</li>
	);
};

const NavbarToggleIcon: FC<NavbarToggleIconProps> = ({ isOpen, onClick }) => (
	<div
		className="w-8 h-8 bg-black-900 rounded-full flex justify-center items-center cursor-pointer z-50"
		onClick={onClick}
	>
		<Icon
			icon={
				isOpen ? "ic:round-close" : "icon-park-outline:hamburger-button"
			}
			width="1.2em"
			height="1.2em"
			style={{ color: "#ffffff" }}
		/>
	</div>
);

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

				<NavbarToggleIcon
					isOpen={navbarToggle}
					onClick={() => setNavbarToggle(!navbarToggle)}
				/>

				<div
					className={`${
						navbarToggle
							? "top-0 right-0 opacity-100"
							: "-right-96 opacity-0 top-[71px]"
					} w-[100vw] h-[100vh] fixed z-20 ease-in-out transition-all duration-500 delay-200  bg-[#f7e1c028] bg-bl `}
				>
					<div className="w-[80vw] h-[100vh]  bg-[#f7e1c0e3] absolute top-0 right-0 pl-8 z-50 ">
						<Image src={favicon} alt="split logo" width={43} height={48} className="mt-4" />
						<div className="mt-12 ">
							<ul className="flex flex-col gap-10 text-xl font-semibold">
								<NavItem href="/">Home</NavItem>
								<NavItem href="/about">About</NavItem>
								<NavItem href="/contact">Contact</NavItem>
							</ul>
						</div>
						<SocialIcons />
					</div>
				</div>
			</nav>
		</>
	);
}
