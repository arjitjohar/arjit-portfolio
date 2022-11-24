import React from "react";
import { useState, useEffect } from "react";

type Props = {};

const NavBar = (props: Props) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <div>
      <nav className=" flex flex-row justify-end space-x-8 mx-12 ">
        <div className="flex-1 text-white"> Home </div>
        <div className="text-white ">About</div>
        <div className="text-white">Work</div>
        <div className="text-white">Contact</div>
      </nav>
    </div>
  );
};
export default NavBar;
