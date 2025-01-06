const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="relative flex justify-between items-baseline p-6 bg-white z-[100]">
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
          />
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
