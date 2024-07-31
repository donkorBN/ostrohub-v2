"use client"
import Link from "next/link";
import Typography from "../typography";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="pt-4 flex gap-12 justify-center items-center min-h-[70vh] lg:h-[90vh]  md:gap-0 relative">
      <div className="w-full md:self-center lg:w-6/12">
        <div className="mr-12 md:mr-0 relative z-10 md:z-0">
          <Typography.h1 className="leading-8 text-4xl">
            Empowering and Growing African Tech Talent
          </Typography.h1>
          <Typography.p className="text-xl md:text-2xl pt-5 md:pt-8">
            In our community we shear tips, tools and techniques for improving
            productivity. From the latest apps and software to time management
            strategies and goal-setting techniques...
          </Typography.p>
        </div>
        <div className="pt-4 md:pt-8 flex justify-center md:justify-start ">
          <Link
            href="/"
            className="bg-[#019444] text-xl py-2 px-12 text-white md:px-14 md:py-3 md:text-2xl  font-medium rounded-lg "
          >
            Join
          </Link>
        </div>
      </div>
      <div className="absolute w-32 h-32 md:w-40 md:h-40  top-24 lg:top-16 right-0 lg:inset-x-auto    md:z-10">
        <Image src="/assets/idea.png" alt="Idea" fill priority />
      </div>
      <div className="hidden relative lg:block w-7/12 h-5/6 overflow-hidden rounded-2xl">
        <Image
          src={"/assets/banner_img.jpeg"}
          alt="banner"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute top-0 -z-0 transition-opacity opacity-0 duration-[2s]"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>
    </div>
  );
}
