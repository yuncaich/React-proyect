import React from 'react';
//import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white p-8 text-center flex flex-col items-center">
      <img src="logo.png" alt="Logo" className="h-auto w-24 max-w-full mx-auto mb-4" />

      <nav className="mb-4">
        <a href="/about" className="mx-2 hover:text-gray-300">About</a>
        <a href="/terms" className="mx-2 hover:text-gray-300">Terms</a>
        <a href="/privacy" className="mx-2 hover:text-gray-300">Privacy</a>
        <a href="/career" className="mx-2 hover:text-gray-300">Career</a>
        <a href="/contact" className="mx-2 hover:text-gray-300">Contact us</a>
        <a href="/cookies" className="mx-2 hover:text-gray-300">Cookies</a>
      </nav>

      <div className="flex justify-center items-center mb-4 text-xl">
      
      <div className="flex justify-center items-center mb-4 text-xl">
        <a href="https://www.instagram.com/mundolandiapark2/" target="_blank" rel="noopener noreferrer" className="flex items-center mx-1">
          <FaInstagram />
          <span className="ml-1">mundolandiapark2</span>
        </a>
      </div>
      </div>

      <div className="text-sm text-gray-400">
        <p>Copyrights ©2023 MundolandiaPark. Built by webYc.</p>
      </div>
    </footer>
  );
};

export default Footer;
