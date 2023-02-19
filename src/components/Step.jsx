import { useContext } from "react";
import { Context } from "../Context";

const Step = ({ singleStep, i }) => {
  const { step } = useContext(Context);

  return (
    <div
      className={`w-8 h-8 rounded-full flex justify-center items-center mt-3 mr-5 border border-White cursor-pointer ${
        step === i + 1 ? "bg-Lightblue" : "text-White"
      }`}
    >
      {singleStep}
    </div>
  );
};

export default Step;
