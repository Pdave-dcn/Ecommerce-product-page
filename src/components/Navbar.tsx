import { useState } from "react";

const Navbar = () => {
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
    <header className="relative z-[100] w-full">
      <nav className="flex justify-between items-baseline p-6 bg-white">
        <div className="flex items-baseline space-x-4">
          <img
            className="w-4 h-4 cursor-pointer"
            src="images/icon-menu.svg"
            alt="Menu Icon"
            onClick={() => {
              toggleSideBar(true);
            }}
          />
          <img className="" src="images/logo.svg" alt="Logo" />

          {/* Overlay when sidebar is open */}
          {isSidebarOpen && (
            <div className="fixed inset-0 bg-black opacity-70 transition-opacity"></div>
          )}

          {/* Sidebar on mobile */}
          <div
            className={`fixed inset-y-0 -left-6 p-7 flex flex-col gap-10 bg-white w-[70%] h-full ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <img
              src="images/icon-close.svg"
              alt="Close icon"
              className="w-3 cursor-pointer"
              onClick={() => toggleSideBar(false)}
            />
            <div className="flex flex-col gap-5 font-bold text-veryDarkBlue">
              <span className="cursor-pointer">Collections</span>
              <span className="cursor-pointer">Men</span>
              <span className="cursor-pointer">Women</span>
              <span className="cursor-pointer">About</span>
              <span className="cursor-pointer">Contact</span>
            </div>
          </div>
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
