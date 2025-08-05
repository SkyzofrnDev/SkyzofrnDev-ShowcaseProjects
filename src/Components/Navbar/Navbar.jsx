import React from "react";
import arrow from "../../assets/arrow.svg";

const Navbar = () => {
  return (
    <div className="flex gap-5 justify-end p-10">
      <a href="http://instagram.com/4dirga.h" target="_blank" rel="noopener noreferrer">
        <div className="font-semibold text-2xl flex gap-2">
          <p>Instagram</p>
          <img src={arrow} alt="arrow" />
        </div>
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <div className="font-semibold text-2xl flex gap-2">
          <p>LinkedIn</p>
          <img src={arrow} alt="arrow" />
        </div>
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <div className="font-semibold text-2xl flex gap-2">
          <p>Github</p>
          <img src={arrow} alt="arrow" />
        </div>
      </a>
    </div>
  );
};

export default Navbar;
