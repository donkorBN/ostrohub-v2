import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import NavbarMobile from "@/components/navbar/navbarMobile";
import Suscribe from "@/components/subscribe/suscribe";
import { Inika } from "next/font/google";

const inika = Inika({ subsets: ["latin"], weight: ["400"] })

interface PageProps {
    H1: string;
    boda: string;
    content: string;
    img: string
}

interface ImpactProps {
    H1: string;
    testimony: string;
    name: string;
    job: string;
    dp: string
}

interface MemberProps {
    Dp: string;
    designation: string;

}



const Page: React.FC<PageProps> = ({ H1, boda, content, img }) => {
    return (
        <div className={`min-h-[15rem] md:min-h-[18.7rem] min-w-[16.5rem] md:min-w-[17.6rem] border-[3px] rounded-[24px] p-[1.5rem] flex flex-col justify-between gap-[1rem]`} style={{ borderColor: boda }}>
            <h1 className="text-[1.4rem] md:text-[2rem] font-medium leading-[1.7rem] md:leading-[2.5rem] font-[Clash Grotesk]" style={{ color: boda }}>{H1}</h1>
            <div>
                <h1 className="font-[Roboto] text-[#1E1E1A80] text-[0.9rem] leading-[1rem]">{content}</h1>
            </div>
            <div className="w-full flex justify-end ">
                <div className="h-[1.5rem] md:h-[3.5rem] w-[1.5rem] md:w-[3.5rem] rounded-full flex items-center justify-center" style={{ backgroundColor: boda }} >
                    <img src={img} alt="" className="w-[70%] h-[70%]" />
                </div>
            </div>
        </div>
    )
}

const Impact: React.FC<ImpactProps> = ({ H1, testimony, name, job, dp }) => {
    return (
        <div className="w-[90%] md:w-[30%] flex-shrink-0 flex flex-col gap-[1rem] justify-between md:gap-[1.5rem] md:border-0 border-1 border-[#D1D1D1]">
            <h1 className="text-[#141414] font-semibold text-[1.1rem] md:text-[2.3rem] leading-[1.5rem] md:leading-[3rem] font-[Clash Grotesk]">{H1}</h1>
            <p className="font-[Clash Grotesk] font-light text-[0.9rem] md:text-[1rem] md:text-[1.3rem] leading-[1.2rem] md:leading-[1.5rem] text-[#000000]">{testimony}</p>
            <div>
                <div className="w-[3rem] h-[3rem] bg-[#C4C4C432] rounded-full flex items-center justify-center float-left">
                    <img src={dp} alt="" className="w-90 h-90" />
                </div>
                <h1 className="font-[Clash Grotesk] font-semibold text-[16px] leading-[21.6px]">{name}</h1>
                <p className="font-[Clash Grotesk] font-medium leading-[1rem] text-[0.8rem]">{job}</p>
            </div>
        </div>
    )
}

const Member: React.FC<MemberProps> = ({ Dp, designation }) => {
    return (
        <div className="flex flex-col gap-[0.6rem]">
            <div className="w-[6.9rem] md:w-[13.2rem] h-6.9rem] md:h-[13.2rem] rounded-full">
                <img src={Dp} alt="team Dp" />
            </div>
            <h1 className="text-center font-medium text-[1rem] md:text-[2rem] leading-[1.4rem] md:leading-[2.7rem] text-[#222222]">{designation}</h1>
        </div>
    )
}




export default function About() {







    return (
        <>
            <Navbar />
            <NavbarMobile />
            <div className="w-full flex flex-col items-center bg-[#FDFDFD]">
                <div className="w-[90%] mt-[10vh] flex flex-col items-center gap-[10vh]">
                    <div className="hidden md:flex w-full  ">
                        <div className="w-[60%]  ">
                            <img src="/assets/about1.png" alt="" className=" w-[90%]" />
                        </div>
                        <div className="flex flex-col w-[40%] justify-center">
                            <h1 className="text-[#009444] text-[64px] leading-[83.33px] font-bold font-[inika]">About us</h1>
                            <p className=" font-medium text-[24px] leading-[32.4px] text-[#000000]">Welcome to Out Tech Community, focused on Productivity! We are a group of individuals who are passionate about using technology to enhance productivity and help others do the same, this is what makes us a community.</p>
                        </div>
                    </div>
                    <div className="block md:hidden bg-[url(/assets/about1.png)] bg-cover bg-center w-screen  relative">
                        <div className="absolute inset-0 bg-green-grad opacity-[70%]"></div>
                        <div className="relative w-[90%] h-full pl-[1rem] flex flex-col justify-center gap-[2rem]">
                            <h1 className="text-[#222222] text-[2rem] leading-[41.66px] font-bold font-[inika] mt-[1.5rem]">
                                About us
                            </h1>
                            <p className="font-medium text-[1rem] leading-[21.6px] text-[#000000] mb-[1.5rem]">
                                Welcome to Our Tech Community, focused on Productivity! We are a group of individuals who are passionate about using technology to enhance productivity and help others do the same. This is what makes us a community.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center gap-[1rem]">
                        <h1 className="text-center font-semibold text-[#222222] text-[1.3rem] md:text-[2.3rem] leading-[1.7rem] md:leading-[3rem] font-[Clash Grotesk]">Mission</h1>
                        <div className="bg-[#C4C4C432] rounded-[1.6rem]">
                            <p className="text-center font-normal text-[1rem] md:text-[1.5rem] leading-[1.4rem] md:leading-[2rem] font-[Clash Grotesk] text-[#000000] py-[1.5rem] px-[1.5rem]">"OstroHub's mission is to forge paths and inspire journeys that empower individuals to unlock their innovative potential and create positive change across Africa. We aim to provide comprehensive education, mentorship, and resources to aspiring tech professionals.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <h1 className="text-center font-semibold text-[#222222] text-[1.3rem] md:text-[2.3rem] leading-[3rem] font-[Clash Grotesk]">Vision</h1>
                        <div className="bg-[#C4C4C432] rounded-[1.6rem]">
                            <p className="text-center font-normal text-[1rem] md:text-[1.5rem] leading-[1.4rem] md:leading-[2rem] font-[Clash Grotesk] text-[#000000] py-[1.5rem] px-[1.5rem]">At the heart of our community is a commitment to collaboration and support. We believe that by working together and sharing our knowledge, we can all achieve greater success in our personal and professional lives. Whether you are a seasoned productivity pro or just starting out your journey, we welcome you to our community and look forward to learning and growing with you.</p>
                        </div>

                    </div>
                    <div className="w-full flex overflow-auto gap-[4rem]">
                        <Page
                            H1={"Reduced Inequalities"}
                            boda={"#662D91"}
                            content={"Our inclusive programs aim to diminish inequalities by providing tech education to underserved communities, ensuring equal access to opportunities."}
                            img={"/assets/aboutInequal.png"}
                        />
                        <Page
                            H1={"Quality Education"}
                            boda={"#009444"}
                            content={"We provide accessible tech education, equipping young Africans with the knowledge and skills needed for the digital age."}
                            img={"/assets/aboutEdu.png"}
                        />
                        <Page
                            H1={"Gender Equality"}
                            boda={"#FCB040"}
                            content={"We actively champion gender equality in the tech sector, ensuring equal opportunities for women and girls to excel in technology."}
                            img={"/assets/aboutGenda.svg"}
                        />
                        <Page
                            H1={"Decent work & Economic Growth"}
                            boda={"#ED1C24"}
                            content={"Through high-demand tech training, we contribute to creating employment opportunities and fostering economic growth."}
                            img={"/assets/aboutWork.svg"}
                        />
                        <Page
                            H1={"Industry, Innovation & Infrastructure"}
                            boda={"#1C75BC"}
                            content={"We cultivate innovation and cultivate a skilled workforce, propelling sustainable industrialization and infrastructure development."}
                            img={"/assets/aboutInequal.png"}
                        />
                    </div>
                    <div className="w-[95%] md:w-full relative mb-[5rem] md:mb-[9rem]">
                        <div className="md:h-[8rem] md:w-[8rem] h-[4.5rem] w-[4.5rem] bg-[#EAA53E] rounded-full absolute z-0  "></div>
                        <h1 className="font-[inika] font-bold text-[2rem] md:text-[4rem] leading-[2.6rem] md:leading-[5rem] absolute left-4 top-7 md:left-7 md:top-10">Our impact to the <br />
                            African Society</h1>
                    </div>
                    <div className="w-[100%] md:w-[90%] flex gap-[2rem] md:gap-[0rem] md:justify-between mx-auto overflow-x-auto">
                        <Impact
                            H1={"An amazing way to find resources"}
                            testimony={"A dedicated team poised to bringing the best resources they can find, and adding them to the clutter"}
                            dp={"/assets/aboutImpactlogo.svg"}
                            name={"Jonah Doe"}
                            job={"Graphics designer"}
                        />
                        <Impact
                            H1={"I am so grateful to Ostrohub..."}
                            testimony={"A dedicated team poised to bringing the best resources they can find, and adding them to the clutter"}
                            dp={"/assets/aboutImpactlogo.svg"}
                            name={"Jonah Doe"}
                            job={"Graphics designer"}
                        />
                        <Impact
                            H1={"An amazing way to find resources"}
                            testimony={"A dedicated team poised to bringing the best resources they can find, and adding them to the clutter"}
                            dp={"/assets/aboutImpactlogo.svg"}
                            name={"Jonah Doe"}
                            job={"Graphics designer"}
                        />
                    </div>
                    <div className="flex flex-col gap-[1rem] w-full">
                        <h1 className="font-[Clash Grotesk] font-semibold text-[1.4rem] md:text-[2.5rem] leading-[1.9rem] md:leading-[3.4rem] text-[#222222] text-center">Team Member</h1>
                        <div className="w-full flex overflow-x-auto gap-[4rem]">
                            <Member
                                Dp={"/assets/team1.svg"}
                                designation={"CTO"}
                            />
                            <Member
                                Dp={"/assets/team2.svg"}
                                designation={"Frontend Dev"}
                            />
                            <Member
                                Dp={"/assets/team3.svg"}
                                designation={"Product Designer"}
                            />
                            <Member
                                Dp={"/assets/team4.svg"}
                                designation={"Brand Manager"}
                            />
                            <Member
                                Dp={"/assets/team1.svg"}
                                designation={"Backend Dev"}
                            />

                        </div>
                    </div>
                    <Suscribe />
                </div>
            </div>
            <Footer />
        </>
    )
}