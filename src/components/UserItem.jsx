import React, { useContext } from "react";
import { UserContex } from "../UserContex";

const UserItem = ({ name, mailID, imageUrl }) => {
  const { nameLists, setNameLists, chipLists, setChipLists, setInputValue } =
    useContext(UserContex);

  const clickHandler = (item) => {
    setChipLists([...chipLists, item]);
    setNameLists(nameLists.filter((i) => item !== i));
    setInputValue("");
  };

  return (
    <div
      onClick={() => clickHandler(name)}
      className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-neutral-200"
    >
      <img
        className="h-8"
        alt="profile-img"
        src="https://avatar.iran.liara.run/public" // Use the imageUrl from the API response
      />
      <p className="w-5/12 font-semibold text-xs text-neutral-800">{name}</p>
      <p className="w-7/12 font-semibold text-xs text-neutral-400">{mailID}</p>
    </div>
  );
};

export default UserItem;
