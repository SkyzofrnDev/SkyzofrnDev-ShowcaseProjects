import React, { useEffect } from "react";
import { Navbar } from "../../Components/Index";
import BlurText from "../../Components/TextBlur/TextBlur";
import arrow from "../../assets/arrow.svg";

const Landing = () => {
  return (
    <div className=" selection:bg-white flex flex-col selection:text-black bg-fixed text-white bg-cover bg-center bg-no-repeat px-10 h-screen justify-between">
      <Navbar />
      <div className="w-[50%]">
        <BlurText
          text="Hello My Name Is Dirga, as UI UX and Front End Web Developer."
          delay={150}
          animateBy="words"
          direction="top"
          className="text-2xl sm:text-5xl mb-8 heading text-white/50"
        />
        <a
          href="http://portofolio-dirga.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex border-2 w-fit gap-5 mt-12 py-2 px-4 border-white/50 font-semibold hover:border-white duration-300 ease-in-out text-white/50  hover:text-white"
        >
          Visit My Portofolio
          <img src={arrow} alt="" srcset="" />
        </a>
      </div>
      <div className="flex flex-col items-end justify-start md:justify-end">
        <a href="/">
          <BlurText
            text="SKYZOFRNDEV"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-5xl md:text-[5em] lg:text-[8em] xl:text-[10em] mb-8 heading text-white/50 hover:text-[#fff]"
          />
        </a>
        <BlurText
          text="lnnovation ln Every PixeL."
          delay={150}
          animateBy="words"
          direction="top"
          className="text-5xl mb-8 heading text-white/50"
        />
      </div>
    </div>
  );
};

export default Landing;
