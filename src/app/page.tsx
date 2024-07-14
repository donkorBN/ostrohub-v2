import GoalSection from "@/components/landingPage/goalSection";
import HeroSection from "@/components/landingPage/heroSection";
import SkillSection from "@/components/landingPage/skillSections";
import Suscribe from "@/components/subscribe/suscribe";

export default function Home() {
  return (
    <main className="  px-1 md:px-6">
      <HeroSection />
      <SkillSection />
      <GoalSection />
      <Suscribe />
    </main>
  );
}

const meta = {
  pageKey: "home",
  layout: "public",
  allowAccess: "all"
}

Home.meta = meta

// bg-[#fafafa]
/* Rectangle 22 */

