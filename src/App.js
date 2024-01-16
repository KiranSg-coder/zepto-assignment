import { useState, useEffect } from "react";
import axios from "axios";
import { UserContex } from "./UserContex";
import MainContainer from "./components/MainContainer";

function App() {
  const [isItemBoxVisible, setIsItemBoxVisible] = useState(false);
  const [nameLists, setNameLists] = useState([]);
  const [chipLists, setChipLists] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/?results=5");
        const fetchedNames = response.data.results.map(
          (user) => `${user.name.first} ${user.name.last}`
        );
        setNameLists(fetchedNames);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (

    <UserContex.Provider
      value={{
        isItemBoxVisible,
        setIsItemBoxVisible,
        nameLists,
        setNameLists,
        chipLists,
        setChipLists,
        inputValue,
        setInputValue,
      }}
    >
      <div className="flex flex-col items-center my-[10%]">
        <h2 className="text-lg text-blue-500 font-bold mb-12">Pick Users</h2>
        <MainContainer />
      </div>
    </UserContex.Provider >
  );
}

export default App;
