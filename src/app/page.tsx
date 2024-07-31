import Footer from "@/components/footer/footer";
import GoalSection from "@/components/landingPage/goalSection";
import HeroSection from "@/components/landingPage/heroSection";
import SkillSection from "@/components/landingPage/skillSections";
import Navbar from "@/components/navbar/navbar";
import NavbarMobile from "@/components/navbar/navbarMobile";
import Suscribe from "@/components/subscribe/suscribe";

// export const metadata = {
//   title: "Ostrohub",
//   description: "Empowering and Growing African Tech Talent "
// }

export default function Home() {
  return (
    <main>
      <Navbar />
      <NavbarMobile />
      <div className=" px-4 md:px-7 lg:px-12 mt-8 md:mt-0">
        <HeroSection />
        <SkillSection />
        <GoalSection />
        <Suscribe />
      </div>
      <Footer />
    </main>
  );
}

const meta = {
  pageKey: "home",
  layout: "public",
  allowAccess: "all",
};

Home.meta = meta;

// bg-[#fafafa]
/* Rectangle 22 */
