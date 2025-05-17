import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = ['Home', 'Resources', 'Trading Recap', 'Blog', 'Contact'];

  return (
    <nav className="w-full bg-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-17 h-17" />
      </div>

      {/* Navigation links */}
      <div className="hidden md:flex flex-grow justify-center ml-15 gap-10 items-center">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.replace(/\s+/g, '').toLowerCase()}`}
            className="text-[#4f5866] font-semibold hover:text-[#2c5530] transition"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Button */}
      <div className="hidden md:block">
        <button className="bg-[#2c5530] text-white px-4 py-2 rounded-sm font-semibold hover:opacity-90 transition">
          Book a Consultation
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-[#4f5866]">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-6 z-50 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.replace(/\s+/g, '').toLowerCase()}`}
              className="text-[#4f5866] hover:text-[#2c5530] text-lg"
            >
              {link}
            </a>
          ))}
          <button className="bg-[#2c5530] text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition">
            Book a Consultation
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

