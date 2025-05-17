import React from "react";
import { whatICards } from "../assets/assets";

const What = () => {
  return (
    <div className="bg-[#f8faf9] max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 text-[#2C5530]">
        What I Trade
      </h2>
        <p className="text-gray-500 mb-10 text-base sm:text-lg text-center max-w-2xl mx-auto px-4">
        Access insights, and analysis to help you develop a consistent trading approach and navigate market challenges.
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        {whatICards.map(({ title, img, points }, index) => (
          <div
            key={index}
            className="flex-1  shadow-md rounded-xl overflow-hidden flex flex-col"
          >
            <img
              src={img}
              alt={title}
              className="w-full object-cover"
              style={{ maxHeight: "280px", height: "auto" }}
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">{title}</h3>
              <ul className="list-disc pl-6 space-y-5 text-base text-gray-700">
                {points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default What;



