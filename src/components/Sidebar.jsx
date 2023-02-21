

const Sidebar = ({step}) => {

  return (
    <div className="sidebar h-[30%] w-full rounded-none md:w-[30%] md:h-full md:rounded-xl">
      <div className="flex justify-center items-center w-full h-full p-5 md:flex-col md:items-start md:justify-start">
        <div className="md:flex md:items-center gap-5">
          <div
            className={`w-10 h-10 rounded-full flex justify-center items-center -mt-5 mr-5 border border-White cursor-pointer ${
              step === 1 ? "bg-Lightblue" : "text-White"
            } md:mr-0 md:my-4`}
          >
            1
          </div>
          <div className="hidden md:block">
            <p className="text-Coolgray uppercase text-xs font-medium">Step 1</p>
            <p className="text-White uppercase font-bold tracking-wider">Your info</p>
          </div>
        </div>
        <div className="md:flex md:items-center gap-5">
          <div
            className={`w-10 h-10 rounded-full flex justify-center items-center -mt-5 mr-5 border border-White cursor-pointer ${
              step === 2 ? "bg-Lightblue" : "text-White"
            } md:mr-0 md:my-4`}
          >
            2
          </div>
          <div className="hidden md:block">
            <p className="text-Coolgray uppercase text-xs font-medium">Step 2</p>
            <p className="text-White uppercase font-bold tracking-wider">Select plan</p>
          </div>
        </div>
        <div className="md:flex md:items-center gap-5">
          <div
            className={`w-10 h-10 rounded-full flex justify-center items-center -mt-5 mr-5 border border-White cursor-pointer ${
              step === 3 ? "bg-Lightblue" : "text-White"
            } md:mr-0 md:my-4`}
          >
            3
          </div>
          <div className="hidden md:block">
            <p className="text-Coolgray uppercase text-xs font-medium">Step 3</p>
            <p className="text-White uppercase font-bold tracking-wider">Add-ons</p>
          </div>
        </div>
        <div className="md:flex md:items-center gap-5">
          <div
            className={`w-10 h-10 rounded-full flex justify-center items-center -mt-5 mr-5 border border-White cursor-pointer ${
              step === 4 ? "bg-Lightblue" : "text-White"
            } md:mr-0 md:my-4`}
          >
            4
          </div>
          <div className="hidden md:block">
            <p className="text-Coolgray uppercase text-xs font-medium">Step 4</p>
            <p className="text-White uppercase font-bold tracking-wider">Summary</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
