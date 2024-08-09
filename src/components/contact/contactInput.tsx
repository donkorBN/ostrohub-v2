
import React from 'react';

interface InputProps {
  label: string;
  type?: 'text' | 'email' | 'password' | string; 
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; 
}

export default function ContactInput ({ label, type = 'text', placeholder, value, onChange, className } : InputProps){
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="text-sm lg:text-lg text-[#141414] px-[10px] md:px-8 mb-1">
        {label}
      </label>
      <input
        id={label} 
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-[10px] md:px-8 md:py-4  text-base lg:text-xl rounded-lg md:rounded-2xl bg-[#90909021] text-black border-none outline-none ${className || ''}`} 
        value={value}
        onChange={onChange}
      />
    </div>
  );
};


