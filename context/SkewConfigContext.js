"use client"
import { createContext, useContext, useState } from "react";

const SkewConfigContext = createContext();

export const SkewConfigProvider = ({ children }) => {
  const [skewConfigs, setSkewConfigs] = useState({
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  });

  return (
    <SkewConfigContext.Provider value={{ skewConfigs, setSkewConfigs }}>
      {children}
    </SkewConfigContext.Provider>
  );
};

export const useSkewConfig = () => useContext(SkewConfigContext);