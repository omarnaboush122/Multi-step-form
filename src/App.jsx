import AddOns from "./components/AddOns";
import PersonalInfo from "./components/Personal-Info";
import Plans from "./components/Plans";
import Sidebar from "./components/Sidebar";
import Summary from "./components/Summary";
import Thanks from "./components/Thanks";
import { useContext } from "react";
import { Context } from "./Context";

const App = () => {
  const { step } = useContext(Context);

  return (
    <div className="bg-Alabaster w-full h-full flex flex-col items-center rounded-xl md:w-[90vw] md:h-[90vh] md:flex-row md:justify-between md:p-3 lg:w-[900px]">
      <Sidebar />
      {step === 1 && <PersonalInfo />}
      {step === 2 && <Plans />}
      {step === 3 && <AddOns />}
      {step === 4 && <Summary />}
      {step === 5 && <Thanks />}
    </div>
  );
};

export default App;
