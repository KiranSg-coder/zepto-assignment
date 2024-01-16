import React, { useContext } from "react";
import UserList from "./UserList";
import NameChip from "./NameChip";
import { UserContex } from "../UserContex";

const UserInputBox = () => {
  const {
    isItemBoxVisible,
    setIsItemBoxVisible,
    chipLists,
    inputValue,
    setInputValue,
  } = useContext(UserContex);

  return (
    <div className="border-b-[3px] border-blue-400 py-2 flex items-center">
      <div className="flex">
        {chipLists.map((name, index) => (
          <NameChip key={index} name={name} />
        ))}
      </div>
      <div className="">
        <input
          type="text"
          value={inputValue}
          onFocus={() => setIsItemBoxVisible(true)}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="Add new users..."
          className={"bg-neutral-100 w-full focus:outline-none"}
        />
        <div
          className={
            isItemBoxVisible ? "absolute my-2 block" : "absolute my-2 hidden"
          }
        >
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default UserInputBox;
