import { BuyingSectionType } from "./types/types";

const BuyingSection = ({
  quantity,
  setQuantity,
  cartQty,
  setCartQty,
}: BuyingSectionType) => {
  const handleDecreaseQty = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  const handleIncreaseQty = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCartBtn = () => {
    setCartQty(cartQty + quantity);
    setQuantity(0);
  };

  return (
    <div className="w-full p-6 mb-5 flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div className="bg-lightGrayishBlue p-6 lg:p-4 flex justify-between items-center rounded-lg mb-4 lg:mb-0 lg:w-[35%]">
        <button type="button" onClick={handleDecreaseQty}>
          <img src="images/icon-minus.svg" alt="Minus icon" />
        </button>
        <span aria-label="Quantity" className="font-bold">
          {quantity}
        </span>
        <button type="button" onClick={handleIncreaseQty}>
          <img src="images/icon-plus.svg" alt="Plus icon" />
        </button>
      </div>

      <button
        type="button"
        onClick={handleAddToCartBtn}
        className="flex items-center justify-center p-6 lg:p-4 rounded-lg bg-orange shadow-xl shadow-paleOrange active:opacity-65 lg:hover:opacity-75 lg:active:opacity-50 lg:shadow-none lg:w-[60%]"
      >
        <img
          src="images/icon-cart.svg"
          alt="Cart icon"
          className="cart__icon"
        />
        <p className="font-bold ml-4 text-veryDarkBlue">Add to cart</p>
      </button>
    </div>
  );
};

export default BuyingSection;
