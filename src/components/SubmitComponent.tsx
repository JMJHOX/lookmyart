import { Button } from "./Button";
import UserProfile from "./../assets/ProfileWhite.svg";
import UploadIcon from "./../assets/Upload.svg";
import { useRef } from "react";
import { current } from "@reduxjs/toolkit";
const SubmitComponent = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  return (
    <div className="  flex w-full  flex-col  ">
      <div className="flex flex-row justify-center  items-center p-[10px] gap-x-[10px] ">
        <img src={UserProfile} alt="" className="w-[45px] h-[45px] " />
        <Button
          styleButton="mt-0   w-[99px] h-[47px]  py-[2px] px-[5px] rounded-[17px]  bg-[#71F676] "
          styleText=" flex justify-center"
          onClick={() => {
            if (ref) {
              ref.current?.click();
            }
          }}
        >
          <img className="w-[25px] h-[25px]" src={UploadIcon} alt="Your SVG" />
          Upload
        </Button>
        <input
          ref={ref}
          type="file"
          id="input_file"
          accept=".jpg,.jpeg,.png"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};
export default SubmitComponent;
