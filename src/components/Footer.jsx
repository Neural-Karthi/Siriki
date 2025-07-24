import React from 'react';
import { useNavigate } from 'react-router-dom';
import Social_icon_1 from '../assets/images/Social_icon_1.svg';
import Social_icon_2 from '../assets/images/Social_icon_2.svg';
import Social_icon_3 from '../assets/images/Social_icon_3.svg';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto text-[#ffffff] pt-10 px-5 md:px-10 2xl:px-40 font-sans">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-3 text-[20px] text-[#fff]">Useful Links</h3>
          <ul className="text-sm space-y-2 text-[#00000]">
            <li className="cursor-pointer">Shop</li>
            <li className="cursor-pointer" onClick={() => navigate('/about')}>About Us</li>
            <li className="cursor-pointer" onClick={() => navigate('/contact')}>Contact Us</li>
            <li className="cursor-pointer">My Account</li>
          </ul>
        </div>

        {/* Careers */}
        <div>
          <h3 className="font-semibold mb-3 text-[20px] text-[#fff]">Helps</h3>
          <ul className="text-sm space-y-2 text-[#00000]">
            <li className="cursor-pointer">Shipping & Delivery Policy</li>
            <li className="cursor-pointer">Refund & Return Policy</li>
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Terms and Conditions</li>
          </ul>
        </div>

        {/* Resources */}

        {/* Subscribe */}
        <div className='col-span-2'>
          <h3 className="font-semibold mb-3 text-[20px] text-[#fff]">Subscribe</h3>
          <p className="text-sm text-[#ffffff] mb-3">Join our community to receive updates</p>
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-black outline-none text-sm flex-grow"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full">
              Subscribe
            </button>
          </div>
          <p className="text-[14px] text-[#ffffff] mt-2">By subscribing, you agree to our <span className="underline">Privacy Policy</span></p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-gray-200" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-8xl mb-4 font-bold text-[#ffffff]">Sirik.</h1>
          <div className="flex gap-4 mt-2">
            <img src={Social_icon_1} alt="Facebook" className="w-5 h-5 cursor-pointer" />
            <img src={Social_icon_2} alt="Instagram" className="w-5 h-5 cursor-pointer" />
            <img src={Social_icon_3} alt="LinkedIn" className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
        <div className="mt-4 text-white md:mt-0 flex gap-4 flex-wrap justify-center md:justify-end">
          <span className="cursor-pointer">Privacy Policy</span>
          <span className="cursor-pointer">Terms of Service</span>
          <span className="cursor-pointer">Cookie Policy</span>
        </div>
      </div>

      <p className=" text-[14px] pb-10 text-[#fffff] text-center md:text-end mt-4">© 2024 Siriki. All rights reserved. | ❤ Developed by Build Your Vision </p>
    </div>
  );
};

export default Footer;
