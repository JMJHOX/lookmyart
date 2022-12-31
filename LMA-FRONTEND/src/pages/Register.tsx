import React from "react";
import { LoginCard } from "../components/cards/LoginCard";
import Footer from "../components/footer";
import Navbar from "../components/Navbar/navbar";

const RegisterPage = () => {
  return (
    <div className="bg-[#B6D9FF]">
      <Navbar />
      <div className=" bg-[#B6D9FF]  w-full flex flex-col items-center justify-stretch  py-[75px] ">
        <LoginCard buttonText="Sign up"/>
      </div>
      <Footer />
    </div>
  );
};
export default RegisterPage;
