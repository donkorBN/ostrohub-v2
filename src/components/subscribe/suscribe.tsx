import Typography from "../typography";

export default function Suscribe() {
  return (
    <div className="flex  my-6 flex-col gap-8  mx-auto justify-center items-center md:justify-between md:flex-row md:w-5/6">
      <Typography.p className="text-xl md:text-lg lg:text-2xl  md:block">
        Subscribe to our newsletter
      </Typography.p>
      <div className="flex w-full md:w-7/12 relative">
        <input
          type="text"
          className="border-none bg-[#9090903B] px-5 py-3 md:px-6 md:py-4 w-full rounded-2xl"
          placeholder="Your email"
        />
        <button className="border-none h-full outline-none bg-[#EAA53E] px-6 py-3 rounded-2xl absolute right-0 top-0">
          A
        </button>
      </div>
    </div>
  );
}
