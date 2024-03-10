import "./Hero.css";
import React from "react";
import hero from "../../Assets/Hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex h-full mx-12">
      <div className="w-11/12 my-auto">
        <div className="font-sans font-semibold text-lg">
          <span className="mr-4 font-extrabold font-sans text-4xl">
            HerLegalRights
          </span>
          is a Empowering women by bridging the gap between legal frameworks and
          awareness. We revolutionize access to legal assistance with a
          comprehensive approach, including education, community support, and
          empowerment initiatives in the fight against gender inequality
          <Link to="/Resources">
            <div className="mt-8 crazy-button">Learn More</div>
          </Link>
        </div>
      </div>
      <div>
        <img src={hero} className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
