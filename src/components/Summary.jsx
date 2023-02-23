const Summary = () => {
  return (
    <div className="w-full h-full relative flex justify-center md:w-[60%] md:h-[90%] lg:w-[65%]">
      <div className="w-[430px] mx-auto h-auto py-10 px-5 flex flex-col rounded-xl">
        <h1 className="mb-1 text-Marineblue text-3xl font-bold md:text-4xl">
          Finishing up
        </h1>
        <p className="text-Coolgray">
          Double-check everything looks OK before confirming.
        </p>
        <div className="w-full my-5 p-[10px] bg-Magnolia rounded-xl ">
          <div className="flex items-center justify-between pt-3 py-5 border-b border-b-Lightblue">
          <div>
          <p className="text-Marineblue font-bold">Arcade (Monthly)</p>
          <button className="underline decoration-Marineblue decoration-solid decoration-1 text-Purplishblue">Change</button>
          </div>
          <p className="text-Marineblue font-bold">$9/mo</p>
          </div>
          <div className="flex flex-col gap-3 py-3">
            <div className="flex items-center justify-between">
              <p className="text-Coolgray">Local Storage</p>
              <p className="text-Marineblue">+$2/mo</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-Coolgray">Online service</p>
              <p className="text-Marineblue">+$1/mo</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between py-3">
          <p className="text-Coolgray">Total (per month)</p>
          <p className="text-Purplishblue font-bold">+$12/mo</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
