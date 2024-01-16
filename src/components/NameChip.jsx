import React, { useContext } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { UserContex } from "../UserContex";

const NameChip = ({ name }) => {
  const { nameLists, setNameLists, chipLists, setChipLists, highlighted } =
    useContext(UserContex);

  const handleClick = (name) => {
    setChipLists(chipLists.filter((item) => item !== name));
    setNameLists([...nameLists, name]);
  };

  return (
    <div
      className={`flex items-center p-1 rounded-full gap-1 ${
        highlighted === name ? "border-blue-500 border-2" : "bg-neutral-200"
      }`}
    >
      <img
        className="h-5 rounded-full"
        alt="profile-img"
        src="https://avatar.iran.liara.run/public"
      />
      <p className="text-sm">{name}</p>
      <VscChromeClose
        className="cursor-pointer"
        onClick={() => handleClick(name)}
      />
    </div>
  );
};

export default NameChip;
