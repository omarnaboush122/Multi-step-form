import { useState } from "react";

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isNameError,setIsNameError] = useState(true);
  const [isEmailError,setIsEmailError] = useState(false);
  const [isPhoneNumberError,setIsPhoneNumberError] = useState(false);
  return (
    <div className="w-full h-full flex justify-center md:w-[60%] md:h-[90%] lg:w-[65%]">
      <div className="w-[90vw] h-auto py-10 px-5 flex flex-col absolute top-[140px] rounded-xl md:relative md:flex md:top-0 md:left-0 md:w-[44vw]">
        <h1 className="mb-1 text-Marineblue text-3xl font-bold">
          Personal info
        </h1>
        <p className="text-Coolgray text-lg">
          Please provide your name, email address, and phone number.
        </p>
        <form className="flex flex-col gap-4 mt-5">
          <div className="relative">
            <label
              htmlFor="name"
              className="block mb-2 text-Marineblue font-bold text-sm"
            >
              Name
            </label>
            <input
              className={`w-full h-10 border border-Coolgray text-Marineblue px-3 rounded-md outline-none md:w-[90%] ${isNameError && "border-Strawberryred"}`}
              type="text"
              placeholder="e.g. omar naboush"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            { isNameError && <p className="absolute top-1 right-0 text-Strawberryred text-xs font-medium md:text-sm md:right-12">This field is required</p> }
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-Marineblue text-sm font-bold"
            >
              Email Address
            </label>
            <input
              className="w-full h-10 border border-Coolgray text-Marineblue px-3 rounded-md outline-none md:w-[90%]"
              type="email"
              placeholder="e.g. omarnaboush509@gmail"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-Marineblue text-sm font-bold"
            >
              Phone Number
            </label>
            <input
              className="w-full h-10 border border-Coolgray text-Marineblue px-3 rounded-md outline-none md:w-[90%]"
              type="number"
              placeholder="e.g. +961 81 346307"
              id="phone"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>
          <div className="absolute -bottom-[70px] right-[20px] md:-bottom-8 md:right-[72px]">
            <button className="text-White bg-Marineblue py-3 px-6 rounded-md cursor-pointer hover:bg-Purplishblue transition-colors duration-300">
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
