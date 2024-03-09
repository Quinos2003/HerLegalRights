import React from "react";
import Logo from "../../Assets/Hero.png";
const Hero = () => {
  return (
    <div className="flex">
      <div className="font-poppins font-bold text-6xl">Law4Her</div>
      <div>
        <img src={Logo} className="" />
      </div>
    </div>
  );
};

export default Hero;
