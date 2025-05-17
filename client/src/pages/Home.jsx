import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import AboutMe from "../components/AboutMe";
import Evolution from '../components/Evolution';
import Resources from "../components/Resources";
import Recap from "../components/Recap";
import What from "../components/What";
import Blogs from '../components/Blogs';
import Stories from "../components/Stories";
import Ques from "../components/Ques";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import {assets} from "../assets/assets.js"; 

export default function Home() {
  return (
    <div className="bg-[#f5fefa] text-black">
 <section id="home" className="min-h-[600px] md:h-screen flex flex-col items-center">
  <Navbar />
  <div
    className="flex flex-1 w-full flex-wrap md:flex-nowrap bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${assets.bg})` }}
  >
    {/* Left: Carousel */}
    <div className="w-full md:w-1/2 flex items-center justify-start px-4 py-6">
      <div className="w-full max-w-5xl">
        <Carousel />
      </div>
    </div>

    {/* Right: Image Card */}
    <div className="w-full md:w-1/2 flex items-center justify-center px-4 py-6">
      <div className="relative h-[300px] w-[220px] sm:h-[400px] sm:w-[260px] md:h-[500px] md:w-[300px] rounded-xl overflow-hidden shadow-2xl">
        <img
          src={assets.person}
          alt="Expert Training Guide"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-transparent text-white p-4 rounded-xl shadow-lg w-[85%]">
          <h2 className="text-lg sm:text-xl font-bold mb-1">Expert Training Guide</h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Simplify your training journey with our proven strategies.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* About Me section */}
      <section id="aboutus" className="bg-[#1f5f4b] min-h-screen">
        <AboutMe />
      </section>

      {/* Evolution section */}
      <section id="evolution" className="bg-white min-h-screen">
        <Evolution />
      </section>

      {/* Resources section */}
      <section id="resources" className="bg-white min-h-screen">
        <Resources />
      </section>

      {/* Recap section */}
      <section id="tradingrecap">
        <Recap />
      </section>

      {/* What section */}
      <section id="what">
        <What />
      </section>

      {/* Blogs section */}
      <section id="blog">
        <Blogs />
      </section>

      {/* Stories section */}
      <section id="stories">
        <Stories />
      </section>

      {/* Questions section */}
      <section id="questions">
        <Ques />
      </section>

      {/* Connect section */}
      <section id="contact">
        <Connect />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}


