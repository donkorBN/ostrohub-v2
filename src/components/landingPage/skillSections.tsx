import { Features } from "@/constant";
import Typography from "../typography";

export default function SkillSection() {
  return (
    <div className="my-12 text-center ">
      <Typography.h4 className="text-lg md:text-2xl lg:text-3xl ">
        Skill up learn and access resources easily.
      </Typography.h4>
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
    </div>
  );
}
