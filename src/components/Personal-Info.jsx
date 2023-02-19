const PersonalInfo = () => {
  return (
    <div className="w-full h-96">
      <div className=" py-10 bg-Alabaster px-5 w-[90vw] mx-auto flex flex-col absolute top-24 left-5 rounded-xl">
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
          <div className="absolute -bottom-[140px] right-3">
          <button className="text-White bg-Marineblue py-3 px-6 rounded-md cursor-pointer">Next Step</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
