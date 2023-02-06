import { useNavigate } from "react-router-dom";
import { Button } from "../../Buttons/ButtonComponent";

const ButtonsElementsMobile = () => {
  let navigate = useNavigate();
  return (
    <div className=" items-end flex flex-col items-center justify-center">
      <Button
        styleButton="mt-[43px] sm:mt-0  text-black py-[2px] px-[5px]"
        styleText=" text-black"
        onClick={() => {
          navigate("/Explore");
        }}
      >
        Explore
      </Button>
      {/* <Button
        styleButton="mt-[43px] sm:mt-0  py-[2px] px-[5px]"
        styleText=""
        onClick={() => {
          navigate("/aboutus");
        }}
      >
        About us
      </Button>
      <Button
        styleButton="mt-[43px] sm:mt-0  py-[2px] px-[5px]"
        styleText=""
        onClick={() => {
          navigate("/artists");
        }}
      >
        Look for Artists
      </Button>
      <Button
        styleButton="mt-[43px] sm:mt-0  py-[2px] px-[5px]"
        styleText=""
        onClick={() => {
          navigate("/employers");
        }}
      >
        Look for Employers
      </Button> */}
    </div>
  );
};
export default ButtonsElementsMobile;
