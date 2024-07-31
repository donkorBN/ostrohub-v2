"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
 

export default function Navbar() {
  const pathname = usePathname()

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
            <li className="w-14 h-7 bg-[#14141411] rounded-2xl text-right grid justify-end">
              <span className="w-7 h-7 rounded-full bg-black-900 block text-right"></span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
