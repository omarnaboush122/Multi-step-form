import { useContext } from "react";
import { Context } from "../Context";

const AddOns = () => {
  const { inputs, setInputs, time, setStep } = useContext(Context);

  const handleChange = (e) => {
    const { name, checked } = e.target;

    setInputs({
      ...inputs,
      [name]: checked,
    });
  };

  return (
    <div className="w-full h-full relative flex justify-center sm:w-[60%] sm:h-[90%] lg:w-[65%]">
      <div className="w-[430px] mx-auto h-auto p-5 flex flex-col rounded-xl">
        <h1 className="mb-1 text-Marineblue text-3xl font-bold sm:text-4xl">
          Pick add-ons
        </h1>
        <p className="text-Coolgray">
          Add-ons help enhance your gaming experience.
        </p>
        <div className="flex flex-col mt-10 gap-6">
          <div
            className={`${
              inputs.service && "bg-Magnolia"
            } flex justify-around items-center w-full py-2 px-4 bg-Alabaster border border-Purplishblue rounded-xl cursor-pointer`}
          >
            <input
              type="checkbox"
              className="w-4 h-5 flex-[0.2] rounded-sm border border-Coolgray outline-none"
              onChange={handleChange}
              checked={inputs.service}
              name="service"
            />
            <div className="mx-4 flex-[0.6]">
              <h3 className="text-sm text-Marineblue font-bold md:text-base">
                Online service
              </h3>
              <p className="text-xs text-Coolgray md:text-sm">
                Access to multiplayer games
              </p>
            </div>
            {time === "monthly" ? (
              <p className="text-sm flex-[0.2] text-Purplishblue">+$1/mo</p>
            ) : (
              <p className="text-sm flex-[0.2] text-Purplishblue">+$10/yr</p>
            )}
          </div>
          <div
            className={`${
              inputs.storage && "bg-Magnolia"
            } flex justify-around items-center w-full py-2 px-4 bg-Alabaster border border-Purplishblue rounded-xl cursor-pointer`}
          >
            <input
              type="checkbox"
              className="w-4 h-5 flex-[0.2] rounded-sm border border-Coolgray outline-none"
              onChange={handleChange}
              checked={inputs.storage}
              name="storage"
            />
            <div className="mx-4 flex-[0.6]">
              <h3 className="text-sm text-Marineblue font-bold md:text-base">
                Larger storage
              </h3>
              <p className="text-xs text-Coolgray md:text-sm">
                Extra 1TB of cloud save
              </p>
            </div>
            {time === "monthly" ? (
              <p className="text-sm flex-[0.2] text-Purplishblue">+$2/mo</p>
            ) : (
              <p className="text-sm flex-[0.2] text-Purplishblue">+$20/yr</p>
            )}
          </div>
          <div
            className={`${
              inputs.profile && "bg-Magnolia"
            } flex justify-around items-center w-full py-2 px-4 bg-Alabaster border border-Purplishblue rounded-xl cursor-pointer`}
          >
            <input
              type="checkbox"
              className="w-4 h-5 flex-[0.2] rounded-sm border border-Coolgray outline-none"
              onChange={handleChange}
              checked={inputs.profile}
              name="profile"
            />
            <div className="mx-4 flex-[0.6]">
              <h3 className="text-sm text-Marineblue font-bold md:text-base">
                Customizable Profile
              </h3>
              <p className="text-xs text-Coolgray md:text-sm">
                Custom theme on your profile
              </p>
            </div>
            {time === "monthly" ? (
              <p className="text-sm flex-[0.2] text-Purplishblue">+$2/mo</p>
            ) : (
              <p className="text-sm flex-[0.2] text-Purplishblue">+$20/yr</p>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center mt-16">
          <button
            onClick={() => setStep(2)}
            className="text-Coolgray text-xl cursor-pointer hover:text-Marineblue hover:font-bold transition-colors duration-300"
          >
            Go Back
          </button>
          <button
            onClick={() => setStep(4)}
            className="text-White bg-Marineblue py-3 px-6 rounded-md cursor-pointer hover:bg-Purplishblue transition-colors duration-300"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
