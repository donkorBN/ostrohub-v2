"use client";
import { useState } from "react";
import ContactInput from "./contactInput";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setFirstName(event.target.value);
  };
  return (
    <>
      <ContactInput
        label="First Name"
        type="text"
        placeholder="John"
        value={firstName}
        onChange={handleChange}
      />
      <ContactInput
        label="Last Name"
        type="text"
        placeholder="Doe"
        value={""}
        onChange={handleChange}
      />
      <ContactInput
        label="Email"
        type="email"
        placeholder="abc@example.com"
        value={""}
        onChange={handleChange}
      />
      <ContactInput
        label="Subject"
        type="text"
        placeholder="Subject"
        value={""}
        onChange={handleChange}
      />
      <div className="md:col-span-2">
        <textarea placeholder="Message..." className="w-full px-8 py-4 text-lg min-h-44 rounded-2xl bg-[#90909021] text-[#22222259] border-none outline-none "/>
      </div>
      <div className="text-center  md:col-span-2 flex justify-center">
        <button className="border-none outline-none bg-[#01AD4F] rounded-lg text-white text-base px-7 py-[6px] md:px-32 md:py-[10px] lg:text-[23px] lg:px-24 lg:py-[16px]">Send</button>
      </div>
    </>
  );
}
