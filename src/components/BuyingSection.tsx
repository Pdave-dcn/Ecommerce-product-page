const BuyingSection = () => {
  return (
    <div className="w-full p-6 mb-5">
      <div className="bg-lightGrayishBlue p-6 flex justify-between items-center rounded-lg mb-4">
        <button type="button">
          <img src="images/icon-minus.svg" alt="Minus icon" />
        </button>
        <span aria-label="Quantity" className="font-bold">
          0
        </span>
        <button type="button">
          <img src="images/icon-plus.svg" alt="Plus icon" />
        </button>
      </div>
      <div className="flex bg-orange p-6 justify-center items-center rounded-lg shadow-xl shadow-paleOrange">
        <button type="button">
          <img
            src="images/icon-cart.svg"
            alt="Cart icon"
            className="cart__icon"
          />
        </button>
        <p className="font-bold ml-4 text-veryDarkBlue">Add to cart</p>
      </div>
    </div>
  );
};

export default BuyingSection;
