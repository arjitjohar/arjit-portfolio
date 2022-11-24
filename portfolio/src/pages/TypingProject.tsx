import React from "react";

import typingGame from "../assets/typingGame.gif";

type Props = {};

const TypingProject = (props: Props) => {
  return (
    <div>
      <div className=" flex flex-col justify-center h-screen p-12 ">
        <div className="w-full h-11 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-3">
          <span className="w-3 h-3 rounded-full bg-red-400"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-400"></span>
        </div>
        <div className="bg-gray-100 border-t-0 w-full h-screen">
          <img className="p-2" src={typingGame} alt="my-gif" />
        </div>
      </div>
    </div>
  );
};
export default TypingProject;
