import { Goals } from "@/constant";
import Typography from "../typography";
import Image from "next/image";

export default function GoalSection() {
  return (
    <div className="w-full block lg:flex ">
      <div className=" w-full lg:w-2/5 relative">
        <div className="grid grid-cols-1  md:grid-cols-2 md:grid-rows-2  gap-4  ">
          {Goals.map((goal, index) => (
            <div
              key={index}
              className="w-full bg-[#C4C4C433] md:bg-[#c4c4c400]  rounded-[26px] p-4 text-center md:text-left z-10"
            >
              <Typography.h4 className="text-xl md:text-2xl lg:text-3xl pb-2">
                {goal.name}
              </Typography.h4>
              <Typography.p className="text-left text-sm md:text-base lg:text-lg">
                {goal.text}
              </Typography.p>
            </div>
          ))}
        </div>
        <div className="w-36 h-32 hidden bg md:block absolute bg-contain bg-no-repeat bg-center bg-[url('/assets/center.png')] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        </div>
      </div>
      <div className="hidden lg:block w-3/5 relative overflow-hidden rounded-r-3xl bg-cover bg-center bg-[url('/assets/vr.png')]">
        <span className="absolute w-96 h-80 rounded-full -bottom-4 right-20 bg-[#019444] -z-10"></span>
      </div>
    </div>
  );
}
