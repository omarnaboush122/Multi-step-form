const PersonalInfo = () => {
  return (
    <div className="w-full h-full flex justify-center md:w-[70%] md:h-[90%]">
      <div className="w-[90vw] h-auto py-10 px-5 flex flex-col absolute top-[140px] rounded-xl md:relative md:flex md:top-0 md:left-0">
        <h1 className="mb-1 text-Marineblue text-3xl font-bold">
          Personal info
        </h1>
        <p className="text-Coolgray text-lg">
          Please provide your name, email address, and phone number.
        </p>
        <form className="flex flex-col gap-4 mt-5">
          <div>
            <label htmlFor="name" className="block mb-1 text-Marineblue font-bold text-sm">Name</label>
            <input className="w-full h-10 border border-Coolgray text-Marineblue px-3 rounded-md outline-none" type="text" placeholder="e.g. omar naboush" id="name" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-Marineblue text-sm font-bold">Email Address</label>
            <input
            className="w-full h-10 border border-Coolgray text-Marineblue px-3 rounded-md outline-none"
              type="email"
              placeholder="e.g. omarnaboush509@gmail"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 text-Marineblue text-sm font-bold">Phone Number</label>
            <input className="w-full h-10 border border-Coolgray text-Marineblue px-3 rounded-md outline-none" type="number" placeholder="e.g. +961 81 346307" id="phone" />
          </div>
          <div className="absolute -bottom-[70px] right-3">
          <button className="text-White bg-Marineblue py-3 px-6 rounded-md cursor-pointer">Next Step</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
