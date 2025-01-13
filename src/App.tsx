import { createContext, useState } from "react";
import BuyingSection from "./components/BuyingSection";
import Description from "./components/Description";
import Gallery from "./components/GalleryComponent/Gallery";
import Navbar from "./components/Navbar";
import { CartContextType } from "./components/types/types";

export const CartContext = createContext<CartContextType | null>(null);

const App = () => {
  const [quantity, setQuantity] = useState(0);
  const [cartQty, setCartQty] = useState(0);

  return (
    <div className="flex flex-col items-center font-kumbhSans">
      <CartContext.Provider value={{ cartQty, setCartQty }}>
        <Navbar />
      </CartContext.Provider>
      <div className="lg:flex">
        <Gallery />
        <div className="lg:w-[40%]">
          <Description />
          <BuyingSection
            quantity={quantity}
            setQuantity={setQuantity}
            cartQty={cartQty}
            setCartQty={setCartQty}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
