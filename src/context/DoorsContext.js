import { createContext, useState } from "react";

import Doors from "../assets/door-data.json";

export const DoorsContext = createContext({});

export const DoorsContextProvider = ({ children }) => {
  const [allDoors, setAllDoors] = useState(Doors.doors);
  const [unusedDoors, setUnusedDoors] = useState(Doors.doors);
  const [usedDoors, setUsedDoors] = useState([]);
  const [draggingData, setDraggingData] = useState();

  const value = {
    unusedDoors,
    setUnusedDoors,
    usedDoors,
    setUsedDoors,
    draggingData,
    setDraggingData,
    allDoors,
    setAllDoors,
  };

  return (
    <DoorsContext.Provider value={value}>{children}</DoorsContext.Provider>
  );
};
