import { useState } from "react";
import AddOns from "./components/AddOns";
import PersonalInfo from "./components/Personal-Info";
import Plans from "./components/Plans";
import Sidebar from "./components/Sidebar";
import Summary from "./components/Summary";


const App = () => {
  const [step, setStep] = useState(1);

  const [planInfo,setPlanInfo] = useState({
    name: "Arcade",
    price: "$9/mo",
  });

  return (
    <div className="bg-Alabaster w-full h-full flex flex-col items-center rounded-xl md:w-[90vw] md:h-[90vh] md:flex-row md:justify-between md:p-3 lg:w-[900px]" >
      <Sidebar step={step}/>
    { step === 1 && <PersonalInfo setStep={setStep} /> }
    { step === 2 && <Plans setStep={setStep} setPlanInfo={setPlanInfo} /> }
    { step === 3 && <AddOns setStep={setStep} /> }
    { step === 4 && <Summary setStep={setStep} planInfo={planInfo} /> }
    </div>
  );
}

export default App;
