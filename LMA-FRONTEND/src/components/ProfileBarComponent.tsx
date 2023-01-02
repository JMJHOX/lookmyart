import { Button } from "./Buttons/ButtonComponent";
import UserProfile from "./../assets/ProfileWhite.svg";
import UploadIcon from "./../assets/Upload.svg";
import { useNavigate } from "react-router-dom";

const ProfileBarComponent = () => {
  let navigate = useNavigate();
  return (
    <div className="  flex w-full  flex-col  ">
      <div className="flex flex-row justify-center  items-center p-[10px] gap-x-[10px] ">
        <a
          href=""
          onClick={() => {
            navigate("/profile");
          }}
        >
          <img src={UserProfile} alt="" className="w-[45px] h-[45px] " />
        </a>

        <Button
          styleButton="mt-0   w-[99px] h-[47px]  py-[2px] px-[5px] rounded-[17px]  bg-[#71F676] "
          styleText=" flex justify-center text-[#000000]"
          onClick={() => {
            navigate("/submit");
          }}
        >
          <img className="w-[25px] h-[25px]" src={UploadIcon} alt="Your SVG" />
          Upload
        </Button>
      </div>
    </div>
  );
};
export default ProfileBarComponent;
