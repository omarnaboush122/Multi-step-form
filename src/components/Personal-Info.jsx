import { useEffect, useState } from "react";

const PersonalInfo = ({ setStep }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPhoneNumberError, setIsPhoneNumberError] = useState(false);
  const [isNameSuccess, setIsNameSuccess] = useState(false);
  const [isEmailSuccess, setIsEmailSuccess] = useState(false);
  const [isPhoneNumberSuccess, setIsPhoneNumberSuccess] = useState(false);

  const validateName = (name) => {
    return name.match(/^[a-zA-Z ]{2,30}$/);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhoneNumber = (phoneNumber) => {
    return phoneNumber.match(
      /^((?:\+961|00961)([1-9]|70|71|76|78|79|81)|(0[1-9]|70|71|76|78|79|81))\d{6}$/
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateName(name)) {
      setIsNameSuccess(true);
      setIsNameError(false);
    } else {
      setIsNameSuccess(false);
      setIsNameError(true);
    }

    if (validateEmail(email)) {
      setIsEmailSuccess(true);
      setIsEmailError(false);
    } else {
      setIsEmailSuccess(false);
      setIsEmailError(true);
    }

    if (validatePhoneNumber(phoneNumber)) {
      setIsPhoneNumberSuccess(true);
      setIsPhoneNumberError(false);
    } else {
      setIsPhoneNumberSuccess(false);
      setIsPhoneNumberError(true);
    }

    if (
      validateName(name) &&
      validateEmail(email) &&
      validatePhoneNumber(phoneNumber)
    ) {
      setStep(2);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setIsNameError(false);
      setIsEmailError(false);
      setIsPhoneNumberError(false);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [isNameError, isEmailError, isPhoneNumberError]);
  return (
    <div className="w-full h-full flex justify-center md:w-[60%] md:h-[90%] lg:w-[65%]">
      <div className="w-[90vw] h-auto py-10 px-5 flex flex-col absolute top-[140px] rounded-xl md:relative md:flex md:top-0 md:left-0 md:w-[44vw]">
        <h1 className="mb-1 text-Marineblue text-3xl font-bold">
          Personal info
        </h1>
        <p className="text-Coolgray text-lg">
          Please provide your name, email address, and phone number.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
          <div className="relative">
            <label
              htmlFor="name"
              className="block mb-2 text-Marineblue font-bold text-sm"
            >
              Name
            </label>
            <input
              className={`w-full h-10 border border-Coolgray text-Marineblue px-3 rounded-md outline-none md:w-[90%] ${
                isNameError && "border-Strawberryred"
              }`}
              type="text"
              placeholder="e.g. omar naboush"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {isNameError && (
              <p className="absolute top-2 right-0 text-Strawberryred text-xs font-bold md:right-12">
                Please input only letters from A-Z
              </p>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="email"
              className="block mb-2 text-Marineblue text-sm font-bold"
            >
              Email Address
            </label>
            <input
              className={`w-full h-10 border border-Coolgray text-Marineblue px-3 rounded-md outline-none md:w-[90%] ${
                isEmailError && "border-Strawberryred"
              }`}
              type="email"
              placeholder="e.g. omarnaboush509@gmail.com"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {isEmailError && (
              <p className="absolute top-2 right-0 text-Strawberryred text-xs font-bold md:right-12">
                This field is required
              </p>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="phone"
              className="block mb-2 text-Marineblue text-sm font-bold"
            >
              Phone Number
            </label>
            <input
              className={`w-full h-10 border border-Coolgray text-Marineblue px-3 rounded-md outline-none md:w-[90%] ${
                isPhoneNumberError && "border-Strawberryred"
              }`}
              type="number"
              placeholder="e.g. 81346307"
              id="phone"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
            {isPhoneNumberError && (
              <p className="absolute top-2 right-0 text-Strawberryred text-xs font-bold md:right-12">
                This field is required
              </p>
            )}
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
