
import React from 'react';

interface InputProps {
  label: string;
  type?: 'text' | 'email' | 'password' | string; // Flexible type for other input types
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; // Optional custom CSS class for styling
}

export default function ContactInput ({ label, type = 'text', placeholder, value, onChange, className } : InputProps){
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="text-sm lg:text-lg text-[#141414] px-[10px] md:px-8 mb-1">
        {label}
      </label>
      <input
        id={label} // Link label and input for accessibility
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-[10px] md:px-8 md:py-4  text-sm lg:text-lg rounded-lg md:rounded-2xl bg-[#90909021] text-[#22222259] border-none outline-none ${className || ''}`} // Apply custom class if provided
        value={value}
        onChange={onChange}
      />
    </div>
  );
};


