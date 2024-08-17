"use client";
import React, { useState } from "react";
import ContactInput from "./contactInput";

export default function ContactForm() {


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    messageBody: ""
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    // setFormData(event.target.value);
    const formField: string = event.target.id
    setFormData({...formData, [formField]: event.target.value })
    console.log(event.target, formField)
  };

  const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>)=>{
    setFormData({...formData, [event.target.id]: event.target.value})
    console.log(event.target)
  }

  return (
    <>
      <ContactInput
        label="firstName"
        type="text"
        placeholder="John"
        value={formData.firstName}
        onChange={handleChange}
      />
      <ContactInput
        label="lastName"
        type="text"
        placeholder="Doe"
        value={formData.lastName}
        onChange={handleChange}
      />
      <ContactInput
        label="email"
        type="email"
        placeholder="abc@example.com"
        value={formData.email}
        onChange={handleChange}
      />
      <ContactInput
        label="subject"
        type="text"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
      />
      <div className="md:col-span-2">
        <label htmlFor="messageBody"></label>
        <textarea  placeholder="Message..." id="messageBody" className="w-full px-4 lg:px-8 py-4 text-lg min-h-44 rounded-2xl bg-[#90909021] text-black border-none outline-none" value={formData.messageBody} onChange={handleTextArea}/>
      </div>
      <div className="text-center  md:col-span-2 flex justify-center">
        <button className="border-none outline-none bg-[#01AD4F] rounded-lg text-white text-base px-7 py-[6px] md:px-32 md:py-[10px] lg:text-[23px] lg:px-24 lg:py-[16px]">Send</button>
      </div>
    </>
  );
}
