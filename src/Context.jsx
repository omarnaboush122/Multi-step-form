import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [step,setStep] = useState("first");



  return <Context.Provider value={{step}}>{children}</Context.Provider>;
};

export default ContextProvider;