const AddOns = () => {
  return (
    <div className="w-full h-full flex justify-center md:w-[60%] md:h-[90%] lg:w-[65%]">
      <div className="w-[90vw] h-auto py-10 px-5 flex flex-col absolute top-[140px] rounded-xl md:relative md:flex md:top-0 md:left-0 md:w-[40vw]">
        <h1 className="mb-1 text-Marineblue text-3xl font-bold md:text-4xl">
          Pick add-ons
        </h1>
        <p className="text-Coolgray text-lg">
          Add-ons help enhance your gaming experience.
        </p>
        <div>
          <div className="flex items-center w-full px-6 py-3 mt-10 bg-Alabaster border border-Purplishblue rounded-xl cursor-pointer">
            <input type="checkbox" className="h-10 w-10"/>
            <div className="mx-5">
              <h3 className="text-sm text-Marineblue font-bold mb-1">Online service</h3>
              <p className="text-xs text-Coolgray">Access to multiplayer games</p>
            </div>
            <p className="text-sm text-Purplishblue">+$1/mo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
