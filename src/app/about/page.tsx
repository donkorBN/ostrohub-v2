import ImapactSection from "@/components/aboutPage/ImpactSection";
import TeamSection from "@/components/aboutPage/teamSection";
import GoalSection from "@/components/aboutPage/goalSection";
import HeroSection from "@/components/aboutPage/heroSection";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import NavbarMobile from "@/components/navbar/navbarMobile";
import Suscribe from "@/components/subscribe/suscribe";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us - OstroHub",
	description: "About OstroHub",
	openGraph: {
		title: "OstroHub",
		description: "Fostering tech brilliance! Your community for growth. Whether seasoned or new, find support navigating the tech landscape with us. 🚀",
		images: "https://pbs.twimg.com/profile_images/1813255327351009281/DeSZiT8U_400x400.jpg"
	},
	keywords: ["Tech community", "Fostering growth"]
}

export default function About() {
	return (
		<>
			<Navbar />
			<NavbarMobile />
			<div className=" mt-[73px] md:mt-0">
				<HeroSection />
				<GoalSection />
				<ImapactSection />
				<TeamSection />
				<Suscribe />
			</div>
			<Footer />
		</>
	);
}
// px-4 md:px-7 lg:px-12
