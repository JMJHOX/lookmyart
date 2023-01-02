import { RegisterCard } from "../components/Cards/RegisterCardComponent";
import Footer from "../components/FooterComponent";
import Navbar from "../components/Navbar/NavBarComponent";

const RegisterPage = () => {
  return (
    <div className="bg-[#B6D9FF]">
      <Navbar />
      <div className=" bg-[#B6D9FF]  w-full flex flex-col items-center justify-stretch  py-[75px] ">
        <RegisterCard buttonText="Sign up" />
      </div>
      <Footer />
    </div>
  );
};
export default RegisterPage;
