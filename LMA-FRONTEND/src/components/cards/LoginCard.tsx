import React from "react";
import IconLogoWithoutText from "../../icons/IconLogoWithoutText";
import { Button } from "../Button";

type Props = {
  buttonText:string
};

function LoginCard({buttonText}: Props) {
  return (
    <div className=" w-[300px] h-[711px]  mb-[25px] md:mb-[0px] md:w-[451px] md:h-[711px] bg-[#FFFFFF]   rounded-[70px] flex flex-col items-center">
      <IconLogoWithoutText />
      <p className="text-[#3B3B3B] text-[24px] md:text-[36px] font-semibold leading-space">
        Welcome to LookMyArt
      </p>
      <p className="text-[#9E9C9C] text-[24px] md:text-[36px] font-semibold leading-space pt-[25px]">
        Find your best artist
      </p>
      <div className="pt-[75px] flex flex-col  items-center gap-y-12">
        <div className=" flex flex-col items-left ">
          <p className="text-[#636363] text-[12px]">Email</p>
          <input
            type="email"
            placeholder="Email"
            className="border border-solid border-[#3B3B3B3D] rounded-[15px]  h-[57px] w-[276px]"
          />
        </div>
        <div className=" flex flex-col items-left">
          <p className="text-[#636363] text-[12px]">Password</p>
          <input
            type="password"
            placeholder="Password"
            className="border border-solid border-[#3B3B3B3D] rounded-[15px]  h-[57px] w-[276px]"
          />
        </div>
        <Button
          styleButton="mt-[43px] w-[242px] h-[50px] md:w-[242px] md:h-[57px]  rounded-[15px] border-none drop-shadow-3xl items-center sm:mt-0 border-[#9E9C9C] bg-[#6CB2FE]"
          styleText="text-[20px] px-[13px] text-[#242424]"
          onClick={() => {}}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export { LoginCard };
