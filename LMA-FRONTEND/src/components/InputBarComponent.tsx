import React from "react";
import FooterLine from "../icons/FooterLine";
import { Button } from "./Buttons/ButtonComponent";
import SearchLook from "./../assets/search.svg";
const InputBarComponent = () => {
  return (
    <div className=" md:h-[40px] flex w-full  flex-col justify-stretch  py-[75px] ">
      <div className="flex flex-row justify-center  items-center ">
        <input
          type="text"
          className="mt-0 w-full h-[43px] md:w-[890px] md:h-[43px]  rounded-[25px] rounded-r-[0px] pl-[25px] outline-none text-black"
          placeholder="Search art"
        />
        <Button
          styleButton="mt-0   w-[106px] h-[43px]  py-[2px] px-[5px] rounded-[25px] rounded-l-[0px] bg-[#6CB2FE] "
          styleText=" flex justify-center"
          onClick={() => {}}
        >
          <img className="w-[30px] h-[30px]" src={SearchLook} alt="Your SVG" />
        </Button>
      </div>
    </div>
  );
};
export default InputBarComponent;
