import React from "react";
import UserInputBox from "./UserInputBox";

const MainContainer = () => {
  return (
    <div className="h-96 w-4/6 bg-neutral-100 p-4 border-b-[3px] border-neutral-300 relative">
      <UserInputBox />
      <div className="absolute bottom-0 text-lg text-neutral-500 font-semibold w-full flex justify-between pr-8 p-2"></div>
    </div>
  );
};

export default MainContainer;
