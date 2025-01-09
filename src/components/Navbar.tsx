import { useState } from "react";
import { NavBarType } from "./types/types";
import Sneaker from "./Sneaker";

const Navbar = ({ cartQty, setCartQty }: NavBarType) => {
  const [display, setDisplay] = useState<"hidden" | "block">("hidden");
  const [isSidebarOpen, setIsSidebarOpen] = useState<true | false>(false);

  const toggleCart = () => {
    setDisplay((prevDisplay) =>
      prevDisplay === "hidden" ? "block" : "hidden"
    );
  };

  const toggleSideBar = (boolean: boolean) => {
    setIsSidebarOpen(boolean);
  };

  return (
    <header className="relative z-[100] lg:z-0 w-full lg:mb-12 p-6 lg:px-28">
      <nav className="flex justify-between items-baseline bg-white lg:items-center lg:border-b border-grayishBlue lg:pb-6">
        <div className="flex items-baseline space-x-4 lg:space-x-0">
          <img
            className="w-4 h-4 cursor-pointer lg:hidden"
            src="images/icon-menu.svg"
            alt="Menu Icon"
            onClick={() => {
              toggleSideBar(true);
            }}
          />
          <img src="images/logo.svg" alt="Logo" />

          {/* Overlay when sidebar is open */}
          {isSidebarOpen && (
            <div className="fixed inset-0 bg-black opacity-70 transition-opacity"></div>
          )}

          {/* Sidebar on mobile */}
          <div
            className={`fixed inset-y-0 -left-6 p-7 flex flex-col gap-10 bg-white w-[70%] md:w-[50%] h-full ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:bg-transparent lg:p-0 lg:w-auto lg:h-auto lg:static`}
          >
            <img
              src="images/icon-close.svg"
              alt="Close icon"
              className="w-3 cursor-pointer lg:hidden"
              onClick={() => toggleSideBar(false)}
            />
            <div className="flex flex-col gap-5 font-bold text-veryDarkBlue lg:flex-row lg:ml-8 lg:gap-8 lg:font-normal lg:text-darkGrayishBlue">
              <span className="cursor-pointer">Collections</span>
              <span className="cursor-pointer">Men</span>
              <span className="cursor-pointer">Women</span>
              <span className="cursor-pointer">About</span>
              <span className="cursor-pointer">Contact</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative" onClick={toggleCart}>
            <img
              className="w-6 h-6 cursor-pointer"
              src="images/icon-cart.svg"
              alt="Cart Icon"
            />
            <div className="absolute -top-[8px] -right-[9px] text-white w-6 h-4 bg-orange flex justify-center items-center text-xs rounded-lg cursor-pointer">
              {cartQty}
            </div>
          </div>

          {/* Cart */}
          <div
            className={`${display} absolute left-1/2 -translate-x-[56.666667%] top-[85px] bg-white shadow-lg w-[95.666667%] max-w-sm h-auto min-h-[250px] rounded-lg z-[50] flex flex-col justify-between items-center p-6 lg:left-auto lg:-translate-x-[100%] lg:top-16 lg:shadow-xl`}
          >
            <h1 className="text-xl font-bold text-veryDarkBlue self-start border-b border-grayishBlue pb-4 w-full">
              Cart
            </h1>
            {cartQty > 0 ? (
              <div className="flex flex-col w-full">
                <Sneaker cartQty={cartQty} setCartQty={setCartQty} />
                <button className="bg-orange p-4 font-bold rounded-lg mt-5">
                  Checkout
                </button>
              </div>
            ) : (
              <div className="text-lg text-darkGrayishBlue font-semibold mb-16">
                Your cart is empty.
              </div>
            )}
          </div>
          <img
            className="w-7 lg:w-14 cursor-pointer"
            src="images/image-avatar.png"
            alt="Profile image"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
