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

export default function Home() {
  return (
    <div className="bg-[#f5fefa] text-black">
      {/* First section: Navbar + Carousel, half screen */}
      <section id="home" className="h-screen flex flex-col items-center">
        <Navbar />
        <div className="flex flex-1 w-full max-w-7xl px-4">
          <div className="w-[50%] flex items-center justify-start ml-0 pl-0">
            <div className="w-full max-w-5xl">
              <Carousel />
            </div>
          </div>
        </div>
      </section>

      {/* Second section: AboutMe, natural height */}
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
      <section id="tradingrecap" >
        <Recap />
      </section>

      {/* What section */}
      <section id="what" >
        <What />
      </section>

      {/* Blogs section */}
      <section id="blog" >
        <Blogs />
      </section>

      {/* Stories section */}
      <section id="stories" >
        <Stories />
      </section>

      {/* Ques section */}
      <section id="questions">
        <Ques />
      </section>

      {/* Connect section */}
      <section id="contact">
        <Connect />
      </section>

      <Footer />
    </div>
  );
}


