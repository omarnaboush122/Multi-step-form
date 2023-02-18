import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  const firstStep = () => {
    setStep(1);
  };

  const secondStep = () => {
    setStep(2);
  };

  const thirdStep = () => {
    setStep(3);
  };

  const fourthStep = () => {
    setStep(4);
  };

  return <Context.Provider value={{ step }}>{children}</Context.Provider>;
};

export default ContextProvider;
