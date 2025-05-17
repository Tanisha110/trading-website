import React, { useState, useEffect } from "react";
import { stories } from "../assets/assets.js";

const Stories = () => {
  const [current, setCurrent] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#1f5f4b] flex flex-col items-center justify-center px-4 py-20">
      <div className="w-full max-w-6xl">
        <h1 className="text-white text-center text-3xl sm:text-4xl font-bold mb-5">
          Trader's Success Stories
        </h1>
        <p className="text-white text-center text-md sm:text-lg font-regular mb-10">
          Hear from traders who have transformed their approach and results through our coaching and resources
        </p>

        <div
          className="bg-[#d9d9d9] bg-opacity-50
                     px-6 py-10
                     rounded-lg text-black
                     mx-auto flex items-center justify-center my-16"
        >
          <div className="flex flex-col sm:flex-row items-start gap-6 text-left">
            <img
              src={stories[current].image}
              alt="Story visual"
              className="w-36 h-36 object-cover border border-white rounded-full"
            />
            <p className="text-lg sm:text-xl font-regular font-inria-sans max-w-xl">
              "{stories[current].quote}"
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-[-30px]">
          {stories.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                index === current ? 'bg-white' : 'bg-white opacity-30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;



