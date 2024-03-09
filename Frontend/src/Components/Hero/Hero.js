import React from "react";
import hero from "../../Assets/Hero.png";
const Hero = () => {
  return (
    <div className="flex">
      <div>
        <img src={hero} className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
