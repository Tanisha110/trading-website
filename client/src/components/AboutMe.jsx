import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-screen w-full bg-[#1f5f4b] flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-24 py-10">
      <h1 className="text-white text-3xl sm:text-4xl font-bold pb-2 mb-6">
        <span className="inline-block border-b-2 border-white pb-1">
          About me
        </span>
      </h1>

     <div
  className="bg-[#d9d9d9] bg-opacity-50 
             px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 
             py-6 sm:py-10 md:py-16 lg:py-24 xl:py-32 
             rounded-lg text-black text-base sm:text-lg md:text-xl 
             leading-relaxed font-semibold font-inria-sans 
             w-full max-w-6xl"
  style={{ whiteSpace: "pre-line" }}
>

        <ul className="list-disc list-inside space-y-4">
          <li>I’m a stock market trader who comes from an engineering background. Like most beginners, I went through the usual path—mentors, trading books, weekend courses. But after all that, one truth stood out:</li>
          <li>Trading can’t be taught. It’s a skill that takes time, experience, and self-awareness to develop.</li>
          <li>I’m also a huge cricket fan. And every time legends like SACHIN TENDULKAR, RAHUL DRAVID AND VIRAT KOHLI talk about game awareness, they echo something simple: Keep it simple. Enjoy the game.</li>
          <li>That, to me, is the core of trading. You don’t need complicated setups or secret indicators. You need clarity, discipline, and the ability to stay grounded.</li>
          <li>I still remember my first trade—hands trembling as I hit ‘buy’, heart racing as I watched the P&L tick up and down. Everyone goes through that stage...</li>
          <li>This website is my space. To document my trades, share what I’ve learned, and hopefully help traders who are tired of the noise, the hype, and the “get-rich” nonsense.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
