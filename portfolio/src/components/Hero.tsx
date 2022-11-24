import React from "react";
import Navbar from "./Navbar";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#353531] h-screen w-screen ">
      <h1 className="text-6xl font-bold text-white">
        Hello, I'm <span className="text-[#FF9505]">Arjit </span>
      </h1>

      <h1 className="text-6xl font-bold text-white">
        I'm a <span className="text-[#FF9505]">Full Stack Engineer</span>
      </h1>
    </div>
  );
};

export default Hero;
