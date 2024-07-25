import Typography from "../typography";
import { Icon } from '@iconify/react';
export default function Suscribe() {
  return (
    <div className="flex  my-6 flex-col gap-4  mx-auto justify-center items-center md:justify-between md:flex-row md:w-5/6 md:gap-0">
      <Typography.p className="text-lg font-normal md:font-semibold md:text-lg lg:text-2xl  md:block ">
        Subscribe to our newsletter
      </Typography.p>
      <div className="flex w-full md:w-7/12 relative">
        <input
          type="text"
          className="border-none outline-none bg-[#9090903B] px-5 py-3 md:px-6 md:py-4 w-full rounded-2xl"
          placeholder="Your email"
        />
        <button className="border-none h-full outline-none bg-[#EAA53E] px-6 py-3 rounded-2xl absolute right-0 top-0 flex items-center justify-center">
        <Icon icon="bi:arrow-up-right" className="w-6 h-8 md:w-8 md:h-10"  style={{color: '#000000'}} />        </button>
      </div>
    </div>
  );
}
