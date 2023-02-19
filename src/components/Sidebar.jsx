import { useState } from "react";
import Step from "./Step";

const Navbar = () => {
  const [steps, setSteps] = useState([1, 2, 3, 4]);

  const allStepsElements = steps.map((singleStep, i) => (
    <Step key={i} singleStep={singleStep} i={i} />
  ));

  return (
    <div className="sidebar h-[30%] w-full rounded-none md:w-[30%] md:h-full md:rounded-xl">
      <div className="flex justify-center items-center w-full h-full p-5">{allStepsElements}</div>
    </div>
  );
};

export default Navbar;
