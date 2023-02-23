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
  const [services,setServices] = useState([]);

  useEffect(() => {
    switch (plan) {
      case 1:
        setPlanInfo({
          name: "Arcade",
          price: time === "monthly" ? 9 : 90,
          duration: time === "monthly" ? "mo" : "yr"
        });
        break;
      case 2:
        setPlanInfo({
          name: "Advanced",
          price: time === "monthly" ? 12 : 120,
          duration: time === "monthly" ? "mo" : "yr"
        });
        break;
      case 3:
        setPlanInfo({
          name: "Pro",
          price: time === "monthly" ? 15 : 150,
          duration: time === "monthly" ? "mo" : "yr"
        });
        break;
      default:
        setPlanInfo("No Plan available");
    }
  }, [plan,time]);

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
      {step === 3 && <AddOns setStep={setStep} time={time} services={services} setServices={setServices} />}
      {step === 4 && <Summary setStep={setStep} planInfo={planInfo} time={time} />}
    </div>
  );
};

export default App;
