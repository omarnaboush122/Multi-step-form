import { useState } from "react";
import Step from "./Step";

const Navbar = () => {
  const [steps, setSteps] = useState([1, 2, 3, 4]);

  const allStepsElements = steps.map((singleStep, i) => (
    <Step key={i} singleStep={singleStep} i={i} />
  ));

  return (
    <div className="sidebar w-[30%] h-full rounded-xl">
      <div className="flex justify-center p-5">{allStepsElements}</div>
    </div>
  );
};

export default Navbar;
