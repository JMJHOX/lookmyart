import { LoginCard } from "../components/Cards/LoginCardComponent";
import Footer from "../components/FooterComponent";
import Navbar from "../components/Navbar/NavBarComponent";
import SubmitComponent from "../components/SubmitComponent";

const SubmitPage = () => {
  return (
    <div>
      <Navbar />
      <div className=" bg-background w-full flex flex-col items-center justify-stretch  py-[75px] ">
        <SubmitComponent></SubmitComponent>
      </div>
      <Footer />
    </div>
  );
};
export default SubmitPage;
