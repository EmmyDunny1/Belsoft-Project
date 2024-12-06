import React from "react";
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <header className="bg-[#faf7ff] border-b-2 border-black py-4 px-8 flex justify-between items-center font-montserrat">
      {/* Logo */}
      <div className="flex items-center ">
        <img
          src={Logo}
          alt="Founder's Friday Logo"
          className="w-8 h-8 object-cover"
        />
        <span className="font-bold text-black text-lg">Founder's Friday</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-8 font-medium ">
        <a
          href="#home"
          className="text-[#000000] hover:text-[#8000ff] transition-colors"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-black hover:text-[#8000ff] transition-colors"
        >
          About Us
        </a>
        <a
          href="#gallery"
          className="text-black hover:text-[#8000ff] transition-colors"
        >
          Gallery
        </a>
        <a
          href="#contact"
          className="text-black font-medium transition-colors"
        >
          Contact Us
        </a>
      </nav>

      {/* Register Button */}
      <a
        href="#register"
        className="text-[#8000ff] border-2 border-[#8000ff] px-4 py-2 rounded-[20px] font-medium hover:bg-[#8000ff]"
      >
        Register →
      </a>
    </header>
  );
};

export default Navbar;
