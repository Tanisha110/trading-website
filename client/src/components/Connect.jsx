import React from "react";
import { Mail, Phone, MapPin, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
const Connect = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
      <div className="w-full max-w-6xl">
        {/* Heading & paragraph spanning full width */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#2c5530] mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-500">
            Feel free to reach out for any questions, consultations, or just to say hello. We’re here to help you on your trading journey.
          </p>
        </div>

        {/* Two columns below */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side: Form */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6 text-black">Send a Message</h2>
              <form className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-black font-semibold">
                    Name 
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Full Name"
                    className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2c5530]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-black font-semibold">
                    Email 
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email Address"
                    className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2c5530]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-black font-semibold">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="What is this regarding?"
                    className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2c5530]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-black font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell me more about your trading goals and challenges"
                    rows={5}
                    className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2c5530]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#2c5530] text-white px-4 py-2 rounded-sm font-semibold hover:opacity-90 transition w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

        {/* Right side */}
<div className=" flex-1">
  <div className="bg-[#f8faf9] p-8 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-[#2c5530] mb-8">Contact Information</h2>

    {/* Email */}
    <div className="flex items-start gap-4 mb-6">
      <div className="bg-[#2c5530] rounded-full p-2">
        <Mail className="text-white w-5 h-5" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-black">Email</h3>
        <p className="text-gray-700">your.email@example.com</p>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-start gap-4 mb-6">
      <div className="bg-[#2c5530] rounded-full p-2">
        <Phone className="text-white w-5 h-5" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-black">Contact</h3>
        <p className="text-gray-700">+91 98765 43210</p>
      </div>
    </div>

    {/* Location */}
    <div className="flex items-start gap-4">
      <div className="bg-[#2c5530] rounded-full p-2">
        <MapPin className="text-white w-5 h-5" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-black">Location</h3>
        <p className="text-gray-700">Lucknow, Uttar Pradesh</p>
      </div>
    </div>

    {/* Socials */}
    <h2 className="text-md font-bold text-gray-500 mt-10 mb-4">Connect</h2>
    <div className="flex gap-4">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <div className="bg-[#2c5530] rounded-full p-2 cursor-pointer hover:opacity-80 transition">
          <Twitter className="text-white w-5 h-5" />
        </div>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <div className="bg-[#2c5530] rounded-full p-2 cursor-pointer hover:opacity-80 transition">
          <Linkedin className="text-white w-5 h-5" />
        </div>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <div className="bg-[#2c5530] rounded-full p-2 cursor-pointer hover:opacity-80 transition">
          <Youtube className="text-white w-5 h-5" />
        </div>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <div className="bg-[#2c5530] rounded-full p-2 cursor-pointer hover:opacity-80 transition">
          <Instagram className="text-white w-5 h-5" />
        </div>
      </a>
    </div>
  </div>
  {/* Schedule a Consultation Section */}
<div className="bg-[#f8faf9] shadow-md mt-8 p-8 rounded-lg">
  <h2 className="text-2xl font-bold text-black mb-6">Schedule a Consultation</h2>
  <p className="text-gray-500 mb-6">
    Book a 30-minute call to discuss your trading goals, and I can help you develop a more consistent approach.
  </p>
  <button className="bg-[#2c5530] text-white px-4 py-2 rounded-sm font-semibold hover:opacity-90 transition w-full">
    Book Your Call
  </button>
</div>

</div>

      </div>
    </div>
    </div>
  );
};

export default Connect;

