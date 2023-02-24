const Thanks = () => {
  return (
    <div className="w-full h-full relative flex justify-center md:w-[60%] md:h-[90%] lg:w-[65%]">
      <div className="w-[500px] h-auto py-10 px-5 flex flex-col items-center text-center rounded-xl md:justify-center">
        <img
          src="./images/icon-thank-you.svg"
          alt="icon-thank-you"
          className="w-20"
        />
        <h3 className="text-3xl text-Marineblue font-bold my-5">Thank you!</h3>
        <p className="text-Coolgray">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Thanks;
