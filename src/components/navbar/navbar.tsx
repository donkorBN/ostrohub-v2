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
      <nav className="w-full max-w-[1600px] px-16 py-2 grid-cols-10 fixed top-0 z-40 bg-[#edededf8] justify-between shadow-md items-center hidden md:grid">
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
          </ul>
        </div>
      </nav>
    </>
  );
}
