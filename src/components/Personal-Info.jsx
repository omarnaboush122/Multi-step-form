const PersonalInfo = () => {
  return (
    <div className="bg-Lightblue w-full h-96">
      <div>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="e.g. omar naboush" id="name" />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="e.g. omarnaboush509@gmail"
            id="email"
          />
          <label htmlFor="phone">Phone Number</label>
          <input type="number" placeholder="e.g. +961 81 346307" id="phone" />
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
