import { useState } from "react";

const Plans = () => {
  const [plan, setPlan] = useState(1);
  const [time, setTime] = useState("monthly");

  const firstPlan = () => {
    setPlan(1);
  };
  const secondPlan = () => {
    setPlan(2);
  };
  const thirdPlan = () => {
    setPlan(3);
  };

  const changePlanTime = () => {
    if (time === "monthly") {
      setTime("yearly");
    } else {
      setTime("monthly");
    }
  };

  return (
    <div className="w-full h-full flex justify-center md:w-[60%] md:h-[90%] lg:w-[65%]">
      <div className="w-[90vw] h-auto py-10 px-5 flex flex-col absolute top-[140px] rounded-xl md:relative md:flex md:top-0 md:left-0 md:w-[44vw]">
        <h1 className="mb-1 text-Marineblue text-3xl font-bold">
          Select your plan
        </h1>
        <p className="text-Coolgray text-lg">
          You have the option of monthly or yearly billing.
        </p>
        <div className="flex flex-col gap-5 mt-5 md:flex-row">
          <div
            onClick={firstPlan}
            className={`${
              plan === 1 && "bg-Lightblue border-Purplishblue"
            } flex items-center gap-3 w-full h-auto border border-Coolgray p-4 rounded-xl cursor-pointer hover:bg-Lightblue hover:border-Purplishblue transition-colors duration-300 ease-in-out md:flex-col md:justify-between md:items-start md:w-[150px] md:gap-12`}
          >
            <img src="./images/icon-arcade.svg" alt="arcade" />
            <div>
              <h3 className="text-base text-Marineblue font-bold">Arcade</h3>
              {time === "monthly" ? (
                <p className="text-Coolgray text-base py-1">$9/mo</p>
              ) : (
                <>
                  <p className="text-Coolgray text-base py-1">$90/yr</p>
                  <p className="text-Marineblue text-base font-bold">
                    2 months free
                  </p>
                </>
              )}
            </div>
          </div>
          <div
            onClick={secondPlan}
            className={`${
              plan === 2 && "bg-Lightblue border-Purplishblue"
            } flex items-center gap-3 w-full h-auto border border-Coolgray p-4 rounded-xl cursor-pointer hover:bg-Lightblue hover:border-Purplishblue transition-colors duration-300 ease-in-out md:flex-col md:justify-between md:items-start md:w-[150px] md:gap-12`}
          >
            <img src="./images/icon-advanced.svg" alt="advanced" />
            <div>
              <h3 className="text-base text-Marineblue font-bold">Advanced</h3>
              {time === "monthly" ? (
                <p className="text-Coolgray text-base py-1">$12/mo</p>
              ) : (
                <>
                  <p className="text-Coolgray text-base py-1">$120/yr</p>
                  <p className="text-Marineblue text-base font-bold">
                    2 months free
                  </p>
                </>
              )}
            </div>
          </div>
          <div
            onClick={thirdPlan}
            className={`${
              plan === 3 && "bg-Lightblue border-Purplishblue"
            } flex items-center gap-3 w-full h-auto border border-Coolgray p-4 rounded-xl cursor-pointer hover:bg-Lightblue hover:border-Purplishblue transition-colors duration-300 ease-in-out md:flex-col md:justify-between md:items-start md:w-[150px] md:gap-12`}
          >
            <img src="./images/icon-pro.svg" alt="pro" />
            <div>
              <h3 className="text-base text-Marineblue font-bold">Pro</h3>
              {time === "monthly" ? (
                <p className="text-Coolgray text-base py-1">$15/mo</p>
              ) : (
                <>
                  <p className="text-Coolgray text-base py-1">$150/yr</p>
                  <p className="text-Marineblue text-base font-bold">
                    2 months free
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-evenly items-center bg-Magnolia mt-8 py-3 px-6 rounded-lg md:justify-center">
          <p className={`${time === "monthly" ? "text-Marineblue": "text-Coolgray"} font-bold`}>Monthly</p>
          <div className="w-[50px] h-[25px] bg-Marineblue flex items-center m-auto px-1 rounded-3xl cursor-pointer transition-all duration-300 md:mx-8 ">
            <div
              className={`bg-Alabaster rounded-full p-2 cursor-pointer ${
                time === "monthly" ? "translate-x-0" : "translate-x-6"
              } transition-all duration-200`}
              onClick={changePlanTime}
            ></div>
          </div>
          <p className={`${time === "yearly" ? "text-Marineblue": "text-Coolgray"} font-bold`}>Yearly</p>
        </div>
      </div>
    </div>
  );
};

export default Plans;
