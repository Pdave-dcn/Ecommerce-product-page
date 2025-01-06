import { useState } from "react";

const Navbar = () => {
  const [display, setDisplay] = useState<"hidden" | "block">("hidden");

  const toggleCart = () => {
    setDisplay((prevDisplay) =>
      prevDisplay === "hidden" ? "block" : "hidden"
    );
  };

  return (
    <header className="relative z-[100] w-full">
      <nav className="flex justify-between items-baseline p-6 bg-white">
        <div className="flex items-baseline space-x-4">
          <img
            className="w-4 h-4 cursor-pointer"
            src="images/icon-menu.svg"
            alt="Menu Icon"
          />
          <img className="" src="images/logo.svg" alt="Logo" />
        </div>
        <div className="flex items-center space-x-6">
          <img
            className="w-6 h-6 cursor-pointer"
            src="images/icon-cart.svg"
            alt="Cart Icon"
            onClick={toggleCart}
          />
          <div
            className={`${display} absolute left-1/2 -translate-x-[56.666667%] top-[85px] bg-white shadow-lg w-[95.666667%] max-w-md h-auto min-h-[250px] rounded-lg z-[50] flex flex-col justify-center items-center`}
          >
            <h1 className="text-xl font-bold text-veryDarkBlue self-start mb-auto border-b border-grayishBlue p-6 w-full">
              Cart
            </h1>
            <div className="text-lg text-darkGrayishBlue font-bold py-4">
              Your cart is empty.
            </div>
          </div>
          <img
            className="w-7 cursor-pointer"
            src="images/image-avatar.png"
            alt="Profile image"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
