import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="w-full px-16 py-4 grid-cols-10 justify-between shadow items-center hidden md:grid">
        <div className="col-span-2">
          <div>
            <Link href={"/"}>
              <Image
                src="/assets/OstroHublogo.png"
                alt="logo"
                width={130}
                height={37}
              />
            </Link>
          </div>
        </div>
        <div className="col-span-5 col-end-11 items-center justify-center ">
          <ul className="flex px-4  w-full justify-around text-lg items-center">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
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
