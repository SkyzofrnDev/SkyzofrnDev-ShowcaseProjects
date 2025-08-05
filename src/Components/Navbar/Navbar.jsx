import React from "react";
import arrow from "../../assets/arrow.svg";

const Navbar = () => {
  return (
    <div className="flex gap-10 justify-end p-10">
      <a
        href="http://instagram.com/4dirga.h"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group inline-block"
      >
        <div className="font-semibold text-2xl flex gap-2">
          <p>Instagram</p>
          <img src={arrow} alt="arrow" />
        </div>
        <span class="absolute left-0 top-10 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a
        href="https://www.linkedin.com/in/dirga-hardeka-agustiantara-7421832b8/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group inline-block"
      >
        <div className="font-semibold text-2xl flex gap-2">
          <p>LinkedIn</p>
          <img src={arrow} alt="arrow" />
        </div>
        <span class="absolute left-0 top-10 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a
        href="https://github.com/SkyzofrnDev/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group inline-block"
      >
        <div className="font-semibold text-2xl flex gap-2">
          <p>Github</p>
          <img src={arrow} alt="arrow" />
        </div>
        <span class="absolute left-0 top-10 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>

    </div>
  );
};

export default Navbar;
