import AlignerTypes from "./components/AlignerTypes";
import Header from "./components/Header";
import WhatsAligners from "./components/WhatsAligners";

export default function Home() {
  return (
      <main className="flex flex-col w-full">
      <Header />
      <AlignerTypes/> 
      <WhatsAligners />
      </main>
  );
}
