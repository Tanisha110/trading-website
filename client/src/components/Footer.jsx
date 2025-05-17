import React from 'react';
import { Youtube, Linkedin, Facebook, Instagram } from 'lucide-react';
import { assets } from '../assets/assets.js';

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10">
        {/* Column 1: Logo and Text - wider */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-6 mb-8">
            <img src={assets.logo} alt="Logo" className="mb-4 object-contain" />
            <h2 className="text-2xl font-bold mb-3">Trader</h2>
          </div>
          <p className="text-gray-300 opacity-50 max-w-xs leading-relaxed">
            Transforming engineer and analytical minds into consistent, profitable leaders
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 opacity-50">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#resources" className="hover:text-white">Resources</a></li>
            <li><a href="#recap" className="hover:text-white">Trading Recap</a></li>
            <li><a href="#blogs" className="hover:text-white">Blog</a></li>
            <li><a href="#connect" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-300 opacity-50">
            <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#questions" className="hover:text-white">FAQ</a></li>
            <li><a href="#connect" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Column 4: Stay Connected - wider */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Stay Connected and keep learning!</h3>
          <div className="flex gap-3">
            {[
              { icon: <Youtube className="w-5 h-5 text-white" />, href: "https://youtube.com" },
              { icon: <Linkedin className="w-5 h-5 text-white" />, href: "https://linkedin.com" },
              { icon: <Facebook className="w-5 h-5 text-white" />, href: "https://facebook.com" },
              { icon: <Instagram className="w-5 h-5 text-white" />, href: "https://instagram.com" },
            ].map(({ icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-700 mt-10" />

      <p className="text-center text-gray-400 text-sm mt-6">
        Copyright ©2025 Spanish Learning Hub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
