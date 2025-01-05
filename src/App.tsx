import BuyingSection from "./components/BuyingSection";
import Description from "./components/Description";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Gallery />
      <Description />
      <BuyingSection />
    </div>
  );
};

export default App;
