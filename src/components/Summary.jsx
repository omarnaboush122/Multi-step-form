import SingleService from "./SingleService";

const Summary = ({ setStep, planInfo, services, time }) => {
  const allServices =
    services &&
    services.map((service) => (
      <SingleService key={service.name} {...service} />
    ));

  const servicesPrice = services.map((service) => service.price);

  const totalServicesPrice = servicesPrice.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

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
              <p className="text-Marineblue font-bold">
                {planInfo.name} ({time === "monthly" ? "Monthly" : "Yearly"})
              </p>
              <button onClick={() => setStep(2)} className="underline decoration-Marineblue decoration-solid decoration-1 text-Purplishblue">
                Change
              </button>
            </div>
            <p className="text-Marineblue font-bold">
              +${planInfo.price}/{planInfo.duration}
            </p>
          </div>
          <div className="flex flex-col gap-3 py-3">{allServices}</div>
        </div>
        <div className="flex items-center justify-between p-3">
          <p className="text-Coolgray">Total ({time === "monthly" ? "per month" : "per year"})</p>
          <p className="text-Purplishblue font-bold">
            +${totalServicesPrice + planInfo.price}/{planInfo.duration}
          </p>
        </div>
        <div className="flex justify-between items-center mt-16">
          <button
            onClick={() => setStep(3)}
            className="text-Coolgray text-xl cursor-pointer hover:text-Marineblue hover:font-bold transition-colors duration-300"
          >
            Go Back
          </button>
          <button
            onClick={() => setStep(5)}
            className="text-White bg-Marineblue py-3 px-6 rounded-md cursor-pointer hover:bg-Purplishblue transition-colors duration-300"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
