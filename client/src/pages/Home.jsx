import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import AboutMe from "../components/AboutMe";
import Evolution from '../components/Evolution';
import Resources from "../components/Resources";
import Recap from "../components/Recap";
import What from "../components/What";
import Blogs from "../components/Blogs";
export default function Home() {
  return (
    <div className="bg-[#f5fefa] text-black">
      {/* First section: Navbar + Carousel, half screen */}
      <section className="h-screen flex flex-col items-center">
        <Navbar />
        <div className="flex flex-1 w-full max-w-7xl px-4">
          <div className="w-[70%] flex items-center justify-start ml-0 pl-0">
            <div className="w-full max-w-5xl">
              <Carousel />
            </div>
          </div>
        </div>
      </section>

      {/* Second section: AboutMe, natural height */}
      <section className="bg-[#1f5f4b] min-h-screen">
        <AboutMe />
      </section>

      {/* Evolution section */}
      <section className="bg-white min-h-screen">
        <Evolution />
      </section>

      {/* Resources section */}
      <section className="bg-white min-h-screen">
        <Resources />
      </section>
      <Recap/>
      <What/>
      <Blogs/>
    </div>
  );
}

