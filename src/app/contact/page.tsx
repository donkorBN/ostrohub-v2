"use client";
import ContactForm from "@/components/contact/contactForm";
import ContactInput from "@/components/contact/contactInput";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import NavbarMobile from "@/components/navbar/navbarMobile";
import Suscribe from "@/components/subscribe/suscribe";
import Typography from "@/components/typography";
import { useState } from "react";

export default function Contact() {

  return (
    <>
    <Navbar />
    <NavbarMobile />
    <main className="px-4 md:px-10 lg:px-24 pb-10 mt-8 md:mt-0">
      <div className="w-full min-h-[80vh] flex flex-col gap-4 justify-center items-start md:items-center py-16">
        <Typography.h2 className="hidden md:block">
          Let’s get in touch
        </Typography.h2>
        <Typography.h3 className="block md:hidden">Get in touch</Typography.h3>
        <div className="w-full grid  grid-cols-1 gap-4 md:grid-cols-2 lg:gap-x-14 lg:gap-y-10">
          <ContactForm />
        </div>
        <div className="relative mt-24 py-4 px-2 self-center">
          <div className="h-[72px] w-[72px] md:h-[100px] md:w-[100px] rounded-full bg-[#EAA53E] absolute -z-10 top-4 -left-3"></div>
          <Typography.h2 className="py-8">Join our socials</Typography.h2>
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
