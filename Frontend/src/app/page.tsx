import AlignerTypes from "./components/AlignerTypes";
import Header from "./components/Header";
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
      </main>
    </>
  );
}
