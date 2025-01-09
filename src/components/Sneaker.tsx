import { SneakerType } from "./types/types";

const Sneaker = ({ cartQty, setCartQty }: SneakerType) => {
  const calculateResult = (quantity: number): string => {
    return `$${(125 * quantity).toFixed(2)}`;
  };

  const result = calculateResult(cartQty);
  return (
    <div className="flex justify-between items-center self-stretch">
      <img
        src="images/image-product-1-thumbnail.jpg"
        alt="Product thumbnail"
        className="w-14 rounded-lg"
      />
      <div className="text-darkGrayishBlue">
        <p>Fall Limited Edition Sneakers</p>
        <div>
          <span>$125.00 x {cartQty}</span>
          <span className="font-bold text-veryDarkBlue"> {result}</span>
        </div>
      </div>
      <button type="button" onClick={() => setCartQty(0)}>
        <img src="images/icon-delete.svg" alt="Delete icon" />
      </button>
    </div>
  );
};

export default Sneaker;
