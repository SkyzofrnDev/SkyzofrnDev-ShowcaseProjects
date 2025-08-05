import React from "react";
import arrow from "../../assets/arrow.svg";
const SocialLink = ({ href, label, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group inline-block"
    >
      <div className="font-semibold sm:text-xl md:text-2xl flex sm:justify-normal gap-2 items-center">
        <p>{label}</p>
        <img src={icon} alt={`${label} arrow`} />
      </div>
      <span className="absolute left-0 top-7 sm:top-10 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};
const socialLinks = [
  {
    href: "http://instagram.com/4dirga.h",
    label: "Instagram",
    icon: arrow,
  },
  {
    href: "https://www.linkedin.com/in/dirga-hardeka-agustiantara-7421832b8/",
    label: "LinkedIn",
    icon: arrow,
  },
  {
    href: "https://github.com/SkyzofrnDev/",
    label: "Github",
    icon: arrow,
  },
];
const Navbar = () => {
  return (
    <div className="flex gap-2 sm:gap-5 md:gap-10 sm:justify-end sm:p-10 pt-10 justify-between">
        {socialLinks.map((link, index) => (
          <SocialLink
            key={index}
            href={link.href}
            label={link.label}
            icon={link.icon}
          />
        ))}
    </div>
  );
};

export default Navbar;
