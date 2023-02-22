import { useState } from "react";
import AddOns from "./components/AddOns";
import PersonalInfo from "./components/Personal-Info";
import Plans from "./components/Plans";
import Sidebar from "./components/Sidebar";


const App = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-Alabaster w-full h-full flex flex-col rounded-xl md:w-[90vw] md:h-[550px] md:flex-row md:justify-between md:p-3 lg:w-[900px]" >
      <Sidebar step={step}/>
    { step === 1 && <PersonalInfo setStep={setStep} /> }
    { step === 2 && <Plans setStep={setStep} /> }
    { step === 3 && <AddOns setStep={setStep} /> }
    </div>
  );
}

export default App;
