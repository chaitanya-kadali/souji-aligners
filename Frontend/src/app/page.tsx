import AlignerTypes from "./components/AlignerTypes";
import GoogleMapsComponent from "./components/googleMaps";
import Header from "./components/Header";
import Footer from "./components/subcomp/Footer";
import PopUp from "./components/subcomp/PopUp";
import WhatsAligners from "./components/WhatsAligners";

export default function Home() {
  return (
    <> 
    <PopUp />
      <main className="flex flex-col w-full">
      <Header />
      <AlignerTypes/> 
      <WhatsAligners />
      <GoogleMapsComponent />
      <Footer />
      </main>
    </>
  );
}
