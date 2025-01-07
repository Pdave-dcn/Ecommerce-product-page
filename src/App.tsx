import BuyingSection from "./components/BuyingSection";
import Description from "./components/Description";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col items-center font-kumbhSans">
      <Navbar />
      <div className="lg:flex">
        <Gallery />
        <div className="lg:w-[40%]">
          <Description />
          <BuyingSection />
        </div>
      </div>
    </div>
  );
};

export default App;
