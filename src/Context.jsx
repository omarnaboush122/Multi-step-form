import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState(1);
  const [time, setTime] = useState("monthly");
  const [planInfo, setPlanInfo] = useState({});
  const [services, setServices] = useState([]);
  const [inputs, setInputs] = useState({
    service: false,
    storage: false,
    profile: false,
  });

  const changePlanTime = () => {
    time === "monthly" ? setTime("yearly") : setTime("monthly");
    setServices([]);
    setInputs({
      service: false,
      storage: false,
      profile: false,
    });
  };

  useEffect(() => {
    switch (plan) {
      case 1:
        setPlanInfo({
          name: "Arcade",
          price: time === "monthly" ? 9 : 90,
          duration: time === "monthly" ? "mo" : "yr",
        });
        break;
      case 2:
        setPlanInfo({
          name: "Advanced",
          price: time === "monthly" ? 12 : 120,
          duration: time === "monthly" ? "mo" : "yr",
        });
        break;
      case 3:
        setPlanInfo({
          name: "Pro",
          price: time === "monthly" ? 15 : 150,
          duration: time === "monthly" ? "mo" : "yr",
        });
        break;
      default:
        setPlanInfo("No Plan available");
    }
  }, [plan, time]);

  useEffect(() => {
    if (inputs.service) {
      setServices([
        ...services,
        {
          name: "Online service",
          price: time === "monthly" ? 1 : 10,
          duration: time === "monthly" ? "mo" : "yr",
        },
      ]);
    } else {
      setServices(
        services.filter((service) => service.name !== "Online service")
      );
    }
  }, [inputs.service, time]);

  useEffect(() => {
    if (inputs.storage) {
      setServices([
        ...services,
        {
          name: "Larger storage",
          price: time === "monthly" ? 2 : 20,
          duration: time === "monthly" ? "mo" : "yr",
        },
      ]);
    } else {
      setServices(
        services.filter((service) => service.name !== "Larger storage")
      );
    }
  }, [inputs.storage, time]);

  useEffect(() => {
    if (inputs.profile) {
      setServices([
        ...services,
        {
          name: "Customizable Profile",
          price: time === "monthly" ? 2 : 20,
          duration: time === "monthly" ? "mo" : "yr",
        },
      ]);
    } else {
      setServices(
        services.filter((service) => service.name !== "Customizable Profile")
      );
    }
  }, [inputs.profile, time]);

  return (
    <Context.Provider
      value={{
        step,
        services,
        planInfo,
        time,
        inputs,
        plan,
        setStep,
        setPlan,
        setInputs,
        changePlanTime,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
