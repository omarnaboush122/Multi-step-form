
const Plans = () => {
  return (
    <div className="w-full h-full flex justify-center md:w-[60%] md:h-[90%] lg:w-[65%]">
      <div className="w-[90vw] h-auto py-10 px-5 flex flex-col absolute top-[140px] rounded-xl md:relative md:flex md:top-0 md:left-0 md:w-[44vw]">
        <h1 className="mb-1 text-Marineblue text-3xl font-bold">Select your plan</h1>
        <p className="text-Coolgray text-lg">You have the option of monthly or yearly billing.</p>
        <div className="flex flex-col gap-5 mt-5">
          <div className="flex items-center gap-3 w-full h-auto border border-Coolgray p-5 rounded-xl cursor-pointer hover:bg-Lightblue hover:border-Purplishblue transition-colors duration-300 ease-in-out">
            <img src="./images/icon-arcade.svg" alt="arcade" />
            <div>
              <h3 className="text-base text-Marineblue">Arcade</h3>
              <p className="text-Coolgray text-xs py-1">$9/mo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
