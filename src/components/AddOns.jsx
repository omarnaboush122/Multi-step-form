import { useState } from "react";

const AddOns = ({ setStep }) => {
  const [inputs, setInputs] = useState({
    service: false,
    storage: false,
    profile: false,
  });


  const handleChange = (e) => {
    const {name, checked} = e.target;

    setInputs({
      ...inputs,
      [name]: checked
    })
  };


  return (
    <div className="w-full h-full relative flex justify-center sm:w-[60%] sm:h-[90%] lg:w-[65%]">
      <div className="w-[430px] mx-auto h-auto py-10 px-5 flex flex-col rounded-xl">
        <h1 className="mb-1 text-Marineblue text-3xl font-bold sm:text-4xl">
          Pick add-ons
        </h1>
        <p className="text-Coolgray text-lg">
          Add-ons help enhance your gaming experience.
        </p>
        <div className="flex flex-col mt-10 gap-6">
          <div className="flex justify-around items-center w-full py-2 px-4 bg-Alabaster border border-Purplishblue rounded-xl cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-5 flex-[0.2] rounded-sm border border-Coolgray outline-none"
              onChange={handleChange}
              value={inputs.service}
              name="service"
            />
            <div className="mx-5 flex-[0.6]">
              <h3 className="text-sm text-Marineblue font-bold mb-1 md:text-base">
                Online service
              </h3>
              <p className="text-xs text-Coolgray md:text-sm">
                Access to multiplayer games
              </p>
            </div>
            <p className="text-sm flex-[0.2] text-Purplishblue">+$1/mo</p>
          </div>
          <div className="flex justify-around items-center w-full py-2 px-4 bg-Alabaster border border-Purplishblue rounded-xl cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-5 flex-[0.2] rounded-sm border border-Coolgray outline-none"
              onChange={handleChange}
              value={inputs.storage}
              name="storage"
            />
            <div className="mx-5 flex-[0.6]">
              <h3 className="text-sm text-Marineblue font-bold mb-1 md:text-base">
                Larger storage
              </h3>
              <p className="text-xs text-Coolgray md:text-sm">
                Extra 1TB of cloud save
              </p>
            </div>
            <p className="text-sm flex-[0.2] text-Purplishblue">+$2/mo</p>
          </div>
          <div className="flex justify-around items-center w-full py-2 px-4 bg-Alabaster border border-Purplishblue rounded-xl cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-5 flex-[0.2] rounded-sm border border-Coolgray outline-none"
              onChange={handleChange}
              value={inputs.profile}
              name="profile"
            />
            <div className="mx-5 flex-[0.6]">
              <h3 className="text-sm text-Marineblue font-bold mb-1 md:text-base">
                Customizable Profile
              </h3>
              <p className="text-xs text-Coolgray md:text-sm">
                Custom theme on your profile
              </p>
            </div>
            <p className="text-sm flex-[0.2] text-Purplishblue">+$2/mo</p>
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
