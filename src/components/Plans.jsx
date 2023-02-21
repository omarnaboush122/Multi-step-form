import { useState } from "react";

const Plans = () => {
  const [plan,setPlan] = useState(1);
  const [time,setTime] = useState("monthly");

  const firstPlan = () => {
    setPlan(1);
  }
  const secondPlan = () => {
    setPlan(2);
  }
  const thirdPlan = () => {
    setPlan(3);
  }


  return (
    <div className="w-full h-full flex justify-center md:w-[60%] md:h-[90%] lg:w-[65%]">
      <div className="w-[90vw] h-auto py-10 px-5 flex flex-col absolute top-[140px] rounded-xl md:relative md:flex md:top-0 md:left-0 md:w-[44vw]">
        <h1 className="mb-1 text-Marineblue text-3xl font-bold">Select your plan</h1>
        <p className="text-Coolgray text-lg">You have the option of monthly or yearly billing.</p>
        <div className="flex flex-col gap-5 mt-5">
          <div onClick={firstPlan} className={`${plan === 1 && "bg-Lightblue border-Purplishblue"} flex items-center gap-3 w-full h-auto border border-Coolgray p-4 rounded-xl cursor-pointer hover:bg-Lightblue hover:border-Purplishblue transition-colors duration-300 ease-in-out`}>
            <img src="./images/icon-arcade.svg" alt="arcade" />
            <div>
              <h3 className="text-base text-Marineblue font-bold">Arcade</h3>
              <p className="text-Coolgray text-base py-1">$9/mo</p>
            </div>
          </div>
          <div onClick={secondPlan} className={`${plan === 2 && "bg-Lightblue border-Purplishblue"} flex items-center gap-3 w-full h-auto border border-Coolgray p-4 rounded-xl cursor-pointer hover:bg-Lightblue hover:border-Purplishblue transition-colors duration-300 ease-in-out`}>
            <img src="./images/icon-advanced.svg" alt="advanced" />
            <div>
              <h3 className="text-base text-Marineblue font-bold">Advanced</h3>
              <p className="text-Coolgray text-base py-1">$12/mo</p>
            </div>
          </div>
          <div onClick={thirdPlan} className={`${plan === 3 && "bg-Lightblue border-Purplishblue"} flex items-center gap-3 w-full h-auto border border-Coolgray p-4 rounded-xl cursor-pointer hover:bg-Lightblue hover:border-Purplishblue transition-colors duration-300 ease-in-out`}>
            <img src="./images/icon-pro.svg" alt="pro" />
            <div>
              <h3 className="text-base text-Marineblue font-bold">Pro</h3>
              <p className="text-Coolgray text-base py-1">$15/mo</p>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly items-center bg-Magnolia mt-8 py-3 px-6">
          <p>Monthly</p>
          <div className="w-[50px] h-[25px] bg-Marineblue flex items-center m-auto px-1 rounded-3xl cursor-pointer transition-all duration-300 ">
            <div className="bg-Alabaster rounded-full p-2 cursor-pointer transition-all duration-200"></div>
          </div>
          <p>Yearly</p>
        </div>
      </div>
    </div>
  );
}



export default Plans;
