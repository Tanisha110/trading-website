import React from "react";
import { resourceCards } from "../assets/assets.js";

const Resource = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-[#2C5530] text-3xl sm:text-4xl font-bold mb-4 mt-10 text-center">
        Resources
      </h1>
      <p className="text-gray-500 mb-10 text-base sm:text-lg text-center max-w-2xl mx-auto px-4">
        Access insights, and analysis to help you develop a consistent trading approach and navigate market challenges.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {resourceCards.map(({ title, description, img, link }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md flex flex-col max-w-md mx-auto"
          >
            {/* Image on top with no margin or padding on top/left/right */}
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={img}
                alt={title}
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700 flex-grow">{description}</p>
              <a
                href={link}
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Button centered below the grid */}
      <div className="flex justify-center mt-10">
        <button
          type="button"
          className="bg-[#2c5530] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          More Resources
        </button>
      </div>
    </div>
  );
};

export default Resource;


