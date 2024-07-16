import { Technologies } from "@/constant";
import Typography from "../typography";
import Image from "next/image";

export default function TechnologySlider() {
  return (
    <>
      <div className="w-full bg-black grid grid-cols-7 gap-3 items-center overflow-x-scroll justify-center">
        {Technologies.map((technology, index) => (
          <div key={index} className="relative h-16">
            <Image
              src={technology.img}
              alt={technology.name}
              layout="fill"
              objectFit="contain"
              className="absolute top-0"
            />
          </div>
        ))}
      </div>
    </>
  );
}
