import { useNavigate } from "react-router-dom";
import { Button } from "../../Buttons/ButtonComponent";

const ButtonsElementsDesktop = () => {
  let navigate = useNavigate();
  return (
    <div className="hidden items-end md:flex md:flex-row md:pt-[30px] md:gap-x-[50px] md:items-center">
       
      <Button
        styleButton="button-bar"
        styleText="text-bar"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </Button>
      <Button
        styleButton="button-bar"
        styleText="text-bar"
        onClick={() => {
          navigate("/aboutus");
        }}
      >
        About us
      </Button>
      <Button
        styleButton="button-bar"
        styleText="text-bar"
        onClick={() => {
          navigate("/artists");
        }}
      >
        Look for Artists
      </Button>

      <Button
        styleButton="button-bar"
        styleText="text-bar"
        onClick={() => {
          navigate("/employers");
        }}
      >
        Look for Employers
      </Button>
    </div>
  );
};
export default ButtonsElementsDesktop;
