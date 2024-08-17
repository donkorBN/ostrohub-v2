import ContactForm from "@/components/contactPage/contactForm";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import NavbarMobile from "@/components/navbar/navbarMobile";
import Suscribe from "@/components/subscribe/suscribe";
import Typography from "@/components/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us - OstroHub",
	description: "Contact OstroHub",
	openGraph: {
		title: "OstroHub",
		description: "Fostering tech brilliance! Your community for growth. Whether seasoned or new, find support navigating the tech landscape with us. 🚀",
		images: "https://pbs.twimg.com/profile_images/1813255327351009281/DeSZiT8U_400x400.jpg"
	},
	keywords: ["Tech community", "Fostering growth"]
}

export default function Contact() {

  return (
    <>
    <Navbar />
    <NavbarMobile />
    <main className="px-4 md:px-10 lg:px-24 pb-10 mt-8 md:mt-8">
      <div className="w-full min-h-[80vh] flex flex-col gap-4 justify-center items-start md:items-center py-16">
        <Typography.h1 className="hidden md:block">
          Let&apos;s get in touch
        </Typography.h1>
        <Typography.h2 className="block md:hidden">Get in touch</Typography.h2>
        <div className="w-full grid  grid-cols-1 gap-4 md:grid-cols-2 lg:gap-x-14 lg:gap-y-10">
          <ContactForm />
        </div>
        <div className="relative mt-24 py-4 px-2 self-center">
          <div className="h-[72px] w-[72px] md:h-[100px] md:w-[100px] rounded-full bg-orange-900 absolute -z-10 top-8 -left-3"></div>
          <Typography.h1 className="py-8">Join our socials</Typography.h1>
          <div className="h-7 w-5/6 bg-black-700 m-auto mb-8"></div>
          <Typography.p className="text-sm md:text-lg font-extralight text-center">
            send us a mail contact @ostrohub.com
          </Typography.p>
        </div>
      </div>
      <Suscribe />
    </main>
    <Footer />
    </>
  );
}
