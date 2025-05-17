import React from "react";
import { faqs } from "../assets/assets.js";
import { Plus } from "lucide-react";

const Ques = () => {
  return (
    <div className="w-full bg-[#f8faf9] py-20 flex justify-center px-4 sm:px-8 md:px-16">
      <div className="rounded-lg max-w-4xl w-full text-center px-6 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#2C5530] mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 text-md sm:text-lg mb-10">
          Find answers to common questions about my trading approach, coaching services , and how i can help you develop as a trader
        </p>

        <div className="flex flex-col gap-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="w-full bg-white border border-black rounded-full px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition"
            >
              <p className="text-black flex-grow text-center text-lg sm:text-xl font-regular m-0">
                {item.question}
              </p>
              <Plus className="text-black w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ques;

