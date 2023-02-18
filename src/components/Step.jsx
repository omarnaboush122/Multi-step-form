import React from 'react';

const Step = ({singleStep}) => {
  return (
    <div
    className="w-8 h-8 rounded-full flex justify-center items-center mt-3 mr-5 border border-White text-White cursor-pointer"
  >
    {singleStep}
  </div>
  );
}

export default Step;
