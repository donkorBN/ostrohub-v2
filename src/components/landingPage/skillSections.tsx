"use client";
import { Features, Highlights } from "@/constant";
import Typography from "../typography";
import Image from "next/image";
import TechnologySlider from "../slider/technologySlider";
import CardSlider from "../slider/cardSlider";

export default function SkillSection() {
  return (
    <div className="my-12 text-center ">
      <Typography.p className="text-base md:text-2xl lg:text-3xl font-bold">
        Skill up learn and access resources easily.
      </Typography.p>
      <div className="py-4 w-full block md:flex md:w-5/6 items-center justify-center  mx-auto">
        <TechnologySlider />
        <div className="block md:hidden">
          <CardSlider />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-9 py-5">
        {Features.map((feature, index) => (
          <div className="bg-[#F7E1C0] rounded-[26px] p-5 " key={index}>
            <Typography.h4 className="text-xl md:text-2xl lg:text-3xl  pb-3">
              {feature.heading}
            </Typography.h4>
            <Typography.p className="text-left text-sm md:text-base lg:text-lg">
              {feature.description}
            </Typography.p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 w-full gap-6">
        {Highlights.map((highlight, index) => (
          <div
            key={index}
            className="w-full h-56  rounded-3xl  relative overflow-hidden flex items-end"
          >
            <Image
              src={highlight.img}
              alt="high"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 -z-0 transition-opacity opacity-0 duration-[2s]"
              onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            />
            <Typography.p className="h-16 w-full z-10 bg-gradient-to-r from-[#EAA53E] text-xl text-white flex items-center justify-center">
              {highlight.title}
            </Typography.p>
          </div>
        ))}
      </div>
    </div>
  );
}
