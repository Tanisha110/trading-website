import React from "react";
import {assets} from '../assets/assets'

const Evolution = () => {
  const novicePoints = [
    "A novice trader believes he knows the outcome before even placing the trade.",
    "He sees a chart pattern and assumes it will behave a certain way.",
    "His focus is entirely on the potential reward, with little or no attention to the risk involved.",
    `Scenario A (Winning Trade):\nIf the trade goes in his favor, he thinks, “I knew this would happen.”\nThis creates a false sense of certainty, reinforcing the dangerous belief that outcomes can be predicted.`,
  ];

  const profitablePoints = [
    "A profitable trader starts with the awareness that every trade has an uncertain outcome.",
    " He accepts that the market is unpredictable in the short term and focuses instead on preparation.",
    "His first priority is not the potential gain, but managing risk in light of that uncertain outcome.",
    "His position sizing stays consistent, his focus remains on long-term performance, and his edge is built around accepting the uncertainty of every single trade.",
  ];

const BulletList = ({ points, icon }) => (
  <ul className="space-y-4 text-base sm:text-lg md:text-xl leading-relaxed font-inria-sans font-medium">
    {points.map((point, index) => (
      <li key={index} className="flex items-start">
        <img src={icon} alt="bullet icon" className="w-5 h-5 mt-1 mr-3" />
        <span>{point}</span>
      </li>
    ))}
  </ul>
);


  return <div className="w-full px-4 flex flex-col items-center">
  <h1 className="text-black text-3xl sm:text-4xl font-bold mb-2 mt-10 text-center">
    The Evolution of a Trader
  </h1>
  <p className="text-gray-400 text-base sm:text-lg text-center max-w-2xl mb-8 px-4">
    Understanding the fundamental differences between novice and profitable traders is the first step towards consistent success in the market.
  </p>

  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-10 p-6 sm:p-10 md:p-16">
    {/* Novice Trader */}
    <div className="flex-1 bg-[#fef2f2] rounded-xl p-6 sm:p-10">
     <div className="flex items-center gap-4 mb-6">
  <div className="bg-red-100 rounded-full p-3">
    <img
      src={assets.redexclaim}
      alt="Red exclamation icon"
      className="w-6 h-6 sm:w-8 sm:h-8"
    />
  </div>
  <h2 className="text-2xl sm:text-3xl font-bold font-Inter text-black">
    Novice Trader Mindset
  </h2>
</div>

      <BulletList points={novicePoints} icon={assets.wrong} />
    </div>

    {/* Profitable Trader */}
    <div className="flex-1 bg-[#f0fdf4] rounded-xl p-6 sm:p-10">
     <div className="flex items-center gap-4 mb-6">
  <div className="bg-green-100 rounded-full p-3">
    <img
      src={assets.doubletick}
      alt="Double tick icon"
      className="w-6 h-6 sm:w-8 sm:h-8"
    />
  </div>
  <h2 className="text-2xl sm:text-3xl font-bold font-Inter text-black">
    Profitable Trader Mindset
  </h2>
</div>

      <BulletList points={profitablePoints} icon={assets.correct} />
    </div>
  </div>
</div>
;
};

export default Evolution;
