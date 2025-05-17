import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-screen w-full bg-[#1f5f4b] flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 py-16">
      <div className="w-full max-w-6xl">
        <h1 className="text-white text-3xl sm:text-4xl font-bold pb-2 mb-4">
          <span className="inline-block border-b-2 border-white pb-1">
            About me
          </span>
        </h1>

        <div
          className="bg-[#d9d9d9] bg-opacity-50
                     px-8 sm:px-12 md:px-20 lg:px-28
                     py-12 sm:py-16 md:py-20
                     rounded-lg text-black text-base sm:text-lg md:text-xl
                     leading-relaxed font-semibold font-inria-sans
                     mx-auto my-10 min-h-[70vh] flex items-center"
          style={{ whiteSpace: "pre-line" }}
        >
          <ul className="list-disc list-inside space-y-6">
            <li>
              I'm a stock market trader who comes from an engineering background. Like most beginners, I went through the usual path—mentors, trading books, weekend courses. But after all that, one truth stood out:
            </li>
            <li>Trading can't be taught. It's a skill that takes time, experience, and self-awareness to develop.</li>
            <li>
              I'm also a huge cricket fan. And every time legends like SACHIN TENDULKAR, RAHUL DRAVID AND VIRAT KOHLI talk about game awareness, they echo something simple:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                <li>Keep it simple. Enjoy the game.</li>
              </ul>
            </li>
            <li>
              That, to me, is the core of trading.
              <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                <li>
                  You don't need complicated setups or secret indicators.<br /> You need clarity, discipline, and the ability to stay grounded.
                </li>
              </ul>
            </li>
            <li>
              I still remember my first trade—hands trembling as I hit 'buy', heart racing as I watched the P&L tick up and down.<br /> Everyone goes through that stage...
            </li>
            <li>
              This website is my space.<br /> To document my trades, share what I've learned, and hopefully help traders who are tired of the noise, the hype, and the "get-rich" nonsense.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
