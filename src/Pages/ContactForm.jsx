// ContactForm.jsx
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact_image from '../assets/images/Contant_Image.png'
const ContactForm = () => {
  const [message, setMessage] = useState("");
  const maxChars = 500;

  return (
    <>
     <div className='absolute top-0 z-50 w-full'>
        <Header />
      </div>
      <div className=" bg-gradient-to-br pt-15 from-[#0F0F1C] to-[#1F1147]">
 <div className="min-h-screen cursor-default container mx-auto text-white flex flex-col md:flex-row items-center justify-center px-6 py-16">
      
      {/* Left Section */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <span className="text-sm bg-[#FE5E33] px-4 py-1 rounded-full mb-2 inline-block">
          Contact Us
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'OntrobucjDemo, sans-serif' }}>Let’s Get In Touch.</h1>
        <p className="text-lg">
          Or just reach out manually to{" "}
          <a href="mailto:hello@slotuhi.com" className="text-[#a589f5] underline">
            hello@sirikbeverages.com
          </a>
          
        </p>
      </div>

      {/* Right Section - Form */}
      <form className="md:w-1/2 space-y-5 w-full max-w-xl">
        {/* Full Name */}
          <div className="bg-[#ffffff] rounded-xl px-5 py-4 flex items-center">
          <FaUser className="text-[#949494] mr-3"  />
          <input
            type="text"
            placeholder="Enter your full name..."
            className="bg-transparent outline-none w-full text-black"
          />
        </div>

        {/* Email */}
        <div className="bg-[#ffffff] rounded-xl px-5 py-4 flex items-center">
          <FaEnvelope className="text-[#949494] mr-3" />
          <input
            type="email"
            placeholder="Enter your email address..."
            className="bg-transparent outline-none w-full text-black"
          />
        </div>

        {/* Phone */}
          <div className="bg-[#ffffff] rounded-xl px-5 py-4 flex items-center">
          <FaPhone className="text-[#949494] mr-3" />
          <input
            type="tel"
            placeholder="+44 (000) 000-0000"
            className="bg-transparent outline-none w-full text-black"
          />
        </div>

        {/* Message */}
        <div className="bg-[#ffffff] rounded-xl p-4">
          <textarea
            rows="4"
            maxLength={maxChars}
            placeholder="Enter your main text here..."
            className="bg-transparent outline-none w-full resize-none text-black"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="text-right text-sm text-gray-400">{message.length}/{maxChars}</div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="accent-[#a589f5]" />
          <label className="text-sm">
            I hereby agree to our{" "}
            <span className="underline text-[#a589f5] cursor-pointer">Privacy Policy</span>{" "}
            terms.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#7A5CFA] hover:bg-[#694ae0] transition-all duration-200 text-white font-semibold py-5 px-6 rounded-xl cursor-pointer w-full flex items-center justify-center gap-2"
        >
          Submit Form →
        </button>
      </form>
    </div>
    <div className="w-full overflow-hidden">
      <img src={Contact_image} alt="" className="w-full"/>
    </div>
      </div>
      <div className='w-full bg-gradient-to-br from-[#0F0F1C] to-[#1F1147]'>
        <Footer/>
      </div>
    </>
  );
};

export default ContactForm;
