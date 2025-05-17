import React from "react";
import { recapCards } from "../assets/assets.js";
import { ArrowRight } from "lucide-react";

const Recap = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#f9fafb] px-6 py-12">
      <h1 className="text-[#2C5530] text-3xl sm:text-4xl font-bold mb-4 text-center">
        Trading Recap
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recapCards.map(({ title, description, img, successrate, link }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md flex flex-col max-w-md mx-auto p-4"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-lg mb-4">
              <img
                src={img}
                alt={title}
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{description}</p>

              {/* Bottom row: success rate and link */}
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span className="font-semibold text-gray-400">
                  Success Rate: {successrate}
                </span>
                 <a
                  href={link}
                  className="flex items-center text-green-700 hover:text-green-800 font-medium"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recap;
