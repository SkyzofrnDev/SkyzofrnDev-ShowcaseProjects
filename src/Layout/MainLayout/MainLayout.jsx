import React from "react";
import { Particles } from "../../Components/Index";
import { Landing } from "../Index";

const MainLayout = () => {
  return (
    <div className="relative bg-[#0e0e0e] h-screen">
      <div className="absolute w-full h-full">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="absolute w-full">
        <Landing />
      </div>
    </div>
  );
};

export default MainLayout;
