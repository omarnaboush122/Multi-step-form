import { useEffect, useState } from "react";
import AddOns from "./components/AddOns";
import PersonalInfo from "./components/Personal-Info";
import Plans from "./components/Plans";
import Sidebar from "./components/Sidebar";
import Summary from "./components/Summary";

const App = () => {
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

  console.log(services);

  return (
    <div className="bg-Alabaster w-full h-full flex flex-col items-center rounded-xl md:w-[90vw] md:h-[90vh] md:flex-row md:justify-between md:p-3 lg:w-[900px]">
      <Sidebar step={step} />
      {step === 1 && <PersonalInfo setStep={setStep} />}
      {step === 2 && (
        <Plans
          setStep={setStep}
          plan={plan}
          setPlan={setPlan}
          time={time}
          setTime={setTime}
        />
      )}
      {step === 3 && (
        <AddOns
          setStep={setStep}
          time={time}
          services={services}
          setServices={setServices}
          inputs={inputs}
          setInputs={setInputs}
        />
      )}
      {step === 4 && (
        <Summary setStep={setStep} planInfo={planInfo} time={time} />
      )}
    </div>
  );
};

export default App;
