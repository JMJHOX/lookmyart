import { LoginCard } from "../components/Cards/LoginCardComponent";
import Footer from "../components/FooterComponent";
import Navbar from "../components/Navbar/NavBarComponent";
import SubmitComponent from "../components/SubmitComponent";

const SubmitPage = () => {
  return (
    <div className="bg-[#B6D9FF]">
      <Navbar />
      <div className=" bg-[#B6D9FF]  w-full flex flex-col items-center justify-stretch  py-[75px] ">
        <SubmitComponent></SubmitComponent>
   
      </div>
      <Footer />
    </div>
  );
};
export default SubmitPage;
