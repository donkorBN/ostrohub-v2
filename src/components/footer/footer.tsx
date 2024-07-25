"use client"
import { useState } from "react";
import Image from "next/image";
import Typography from "../typography";
import { FooterLinks } from "@/constant";
import Link from "next/link";



interface DropDownStates {
  [key: string]: boolean; 
}

export default function Footer() {
  const [dropDownStates, setDropDownStates] = useState<DropDownStates>({
    legal: false,
    social: false,
    links: false 
  });

  const handleDropDown = (index:number) => {
    console.log(index);
    setDropDownStates({
      ...dropDownStates , 
      [FooterLinks[index].name]: !dropDownStates[FooterLinks[index].name], 
    });
  };

  return (
    <>
      <div className="flex flex-col gap-10 min-h-[70vh] w-full  justify-center bg-[#EAA53E75] px-4 md:px-7 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-7 ">
          <div className=" md:w-2/6 self-center ">
            <div className="text-2xl md:text-4xl w-36 md:w-48 h-12 md:h-16 font-semibold relative">
              <Image
                src="/assets/OstroHublogo.png"
                alt="logo"
                layout="fill"
                className="absolute top-0"
              />
            </div>
            <Typography.p className="text-base md:text-xl ">
              The future of technology at your grasp, all you have to do is
              reach out and grasp it.
            </Typography.p>
          </div>
          <div className="flex gap-3 md:gap-20 flex-col md:flex-row ">
            {
              FooterLinks.map((item, index)=>(
                <div key={index}>
                  <Typography.h4 className="text-lg md:text-2xl lg:text-[32px] font-medium cursor-pointer transition-all" onClick={()=> handleDropDown(index)}>
                    {item.name}
                </Typography.h4>
                {item.links.map((link, index)=>(
                <ul className={`${ dropDownStates[item.name] ? 'block': 'hidden'} md:block pt-5 font-normal `} key={index}>
                  <li className="text-base md:text-2x font-normal">
                    <Link href={link.path}> 
                    {link.name}
                    </Link>
                    </li>
              </ul>
                ))}
                </div>
              ))
            }
          
          </div>
        </div>
        <div className="flex justify-center items-center lg:justify-between w-full  gap-3 flex-col-reverse md:flex-row md:gap-8 self-center">
          <Typography.p className="text-sm md:text-xl pt-4 md:pl-6 md:pt-0">
            OstroHub @ 2023 All Rights Reserved
          </Typography.p>
          <div className="h-8 w-56 bg-black-900 self-start"></div>
        </div>
      </div>
    </>
  );
}

         