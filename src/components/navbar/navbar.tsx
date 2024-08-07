"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useState } from "react";
 

export default function Navbar() {
  const pathname = usePathname()
  const [isdark, setIsDark] = useState(false)

  const isActive = (href:string) => pathname === href
  return (
    <>
      <nav className="w-full px-16 py-2 grid-cols-10 justify-between shadow-md items-center hidden md:grid">
        <div className="col-span-2">
          <div>
            <Link href={"/"}>
              <Image
                src="/assets/OstroHublogo.png"
                alt="logo"
                width={170}
                height={50}

              />
            </Link>
          </div>
        </div>
        <div className="col-span-5 col-end-11 items-center justify-center ">
          <ul className="flex px-4  w-full justify-around text-lg items-center font-semibold">
            <li>
              <Link href={"/"} className={isActive('/') ? "text-[#01AD4F]": ""}>Home</Link>
            </li>
            <li>
              <Link href={"/about"} className={isActive('/about') ? "text-[#01AD4F]": ""}>About</Link>
            </li>
            <li>
              <Link href={"/contact"} className={isActive('/contact') ? "text-[#01AD4F]": ""}>Contact</Link>
            </li>
            <li className={`${isdark? 'justify-end': 'justify-start'} w-14 h-7 bg-[#14141411] rounded-2xl text-right grid transition-all ease-in-out duration-500 delay-200`} onClick={()=>setIsDark(!isdark)}>
              <span className={`${isdark? 'bg-black-900': 'bg-[#eaa53ec6]'} w-7 h-7 rounded-full block text-right`}></span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
