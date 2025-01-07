const Description = () => {
  return (
    <div className="self-start p-6 -mt-8 lg:mt-0">
      <p className="font-semibold mb-4 text-darkGrayishBlue">SNEAKER COMPANY</p>
      <h1 className="font-[700] text-3xl mb-6 text-veryDarkBlue">
        Fall Limited Edition Sneakers
      </h1>
      <p className="mb-6 text-darkGrayishBlue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="flex justify-between items-center lg:flex-col lg:items-start">
        <div className="flex items-center">
          <h2 className="font-[700] text-3xl mr-5">$125.00</h2>
          <p className="text-white bg-veryDarkBlue p-1 px-4 font-semibold rounded-lg">
            50%
          </p>
        </div>
        <p className="font-bold text-darkGrayishBlue text-lg line-through">
          $250.00
        </p>
      </div>
    </div>
  );
};

export default Description;
