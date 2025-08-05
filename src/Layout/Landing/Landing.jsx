import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Navbar } from "../../Components/Index";
import { Projects } from "../Index";
import BlurText from "../../Components/TextBlur/TextBlur";

const Landing = () => {
  return (
    <div className="bg-[url(./bg.png)] bg-fixed bg-[#F8F4E9] bg-cover bg-center bg-no-repeat px-10">
      <Navbar />
      <BlurText
        text="SKYZOFRNDEV"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-[15em] mb-8 heading"
      />
      <BlurText
        text=" Projects"
        delay={300}
        animateBy="words"
        direction="top"
        className="text-8xl mb-8 heading"
      />
      
      <div className="mt-20">
        <Projects />
      </div>
    </div>
  );
};

export default Landing;
