import React from "react";
import { FlowingMenu } from "../../Components/Index";
const demoItems = [
  {
    link: "/",
    text: "Portfolio AgusDev",
    image: "/Project/AgusDev.png",
  },
  {
    link: "https://github.com/SkyzofrnDev/the-unwanted-person",
    text: "The Unwanted PErson",
    image: "/Project/Unwanted.png",
  },
  {
    link: "https://github.com/SkyzofrnDev/Web-RPL-kampak",
    text: "Website RPL",
    image: "/Project/WebRpl.png",
  },
  {
    link: "https://clev.io/LCGNAI2025/kategorismk/Dirga%20Hardeka%20Agustiantara%20%26%20Rivandra%20Abhista%20Adam%C2%A0Prassaya-SMKN%201%20CIBINONG/",
    text: "BOGOR REBORN",
    image: "/Project/BogorReborn.png",
  },  {
    link: "https://github.com/SkyzofrnDev/DBS-Tourism-Revolution",
    text: "VISTA NUSA",
    image: "/Project/VistaNusa.png",
  },
];

const Projects = () => {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <FlowingMenu items={demoItems} />
    </div>
  );
};

export default Projects;
