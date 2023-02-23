

const SingleService = ({ name, price, duration }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-Coolgray">{name}</p>
      <p className="text-Marineblue">
        +${price}/{duration}
      </p>
    </div>
  );
};

export default SingleService;
