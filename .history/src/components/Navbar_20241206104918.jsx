import React from "react";

const Navbar = () => {
  return (
    <header className="bg-[#faf7ff] border-b-2 border-black py-4 px-8 flex justify-between items-center font-montserrat">
      {/* Logo */}
      <div className="flex items-center ">
        <img
          src="/logo-placeholder.png"
          alt="Founder's Friday Logo"
          className="w-8 h-8"
        />
        <span className="font-bold text-black text-lg">Founder's Friday</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-8">
        <a
          href="#home"
          className="text-black hover:text-[#8000ff] transition-colors"
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
          className="text-black hover:text-[#8000ff] transition-colors"
        >
          Contact Us
        </a>
      </nav>

      {/* Register Button */}
      <a
        href="#register"
        className="text-[#8000ff] border-2 border-[#8000ff] px-4 py-2 rounded-[20px] font-semibold hover:bg-[#8000ff] hover:text-white transition-all"
      >
        Register →
      </a>
    </header>
  );
};

export default Navbar;
