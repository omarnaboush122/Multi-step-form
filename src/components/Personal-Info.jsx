const PersonalInfo = () => {
  return (
    <div className="bg-Lightblue w-full h-96">
      <div className=" py-10 bg-[#f3f3f3] px-4 w-[90vw] mx-auto flex flex-col absolute top-24 left-5 rounded-xl">
        <h1 className="mb-1 text-Marineblue text-3xl font-bold">
          Personal info
        </h1>
        <p className="text-Coolgray leading-5">
          Please provide your name, email address, and phone number.
        </p>
        <form className="flex flex-col gap-4 mt-5">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm">Name</label>
            <input className="w-full h-10 border border-Coolgray text-Marineblue px-3 rounded-md outline-none" type="text" placeholder="e.g. omar naboush" id="name" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm">Email Address</label>
            <input
            className="w-full h-10 border border-Coolgray text-Marineblue px-3 rounded-md outline-none"
              type="email"
              placeholder="e.g. omarnaboush509@gmail"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 text-sm">Phone Number</label>
            <input className="w-full h-10 border border-Coolgray text-Marineblue px-3 rounded-md outline-none" type="number" placeholder="e.g. +961 81 346307" id="phone" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
