import ImapactSection from "@/components/aboutPage/ImpactSection";
import TeamSection from "@/components/aboutPage/teamSection";
import GoalSection from "@/components/aboutPage/goalSection";
import HeroSection from "@/components/aboutPage/heroSection";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import NavbarMobile from "@/components/navbar/navbarMobile";
import Suscribe from "@/components/subscribe/suscribe";

import { Inika } from "next/font/google";

const inika = Inika({ subsets: ["latin"], weight: ["400"] });





// const Impact: React.FC<ImpactProps> = ({ H1, testimony, name, job, dp }) => {
//     return (
//         <div className="w-[90%] md:w-[30%] flex-shrink-0 flex flex-col gap-[1rem] justify-between md:gap-[1.5rem] md:border-0 border-1 border-[#D1D1D1]">
//             <h1 className="text-[#141414] font-semibold text-[1.1rem] md:text-[2.3rem] leading-[1.5rem] md:leading-[3rem] font-[Clash Grotesk]">{H1}</h1>
//             <p className="font-[Clash Grotesk] font-light text-[0.9rem] md:text-[1rem]  leading-[1.2rem] md:leading-[1.5rem] text-[#000000]">{testimony}</p>
//             <div>
//                 <div className="w-[3rem] h-[3rem] bg-[#C4C4C432] rounded-full flex items-center justify-center float-left">
//                     <img src={dp} alt="" className="w-90 h-90" />
//                 </div>
//                 <h1 className="font-[Clash Grotesk] font-semibold text-[16px] leading-[21.6px]">{name}</h1>
//                 <p className="font-[Clash Grotesk] font-medium leading-[1rem] text-[0.8rem]">{job}</p>
//             </div>
//         </div>
//     )
// }

// const Member: React.FC<MemberProps> = ({ Dp, designation }) => {
//     return (
//         <div className="flex flex-col gap-[0.6rem]">
//             <div className="w-[6.9rem] md:w-[13.2rem] h-6.9rem] md:h-[13.2rem] rounded-full">
//                 <img src={Dp} alt="team Dp" />
//             </div>
//             <h1 className="text-center font-medium text-[1rem] md:text-[2rem] leading-[1.4rem] md:leading-[2.7rem] text-[#222222]">{designation}</h1>
//         </div>
//     )
// }

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
