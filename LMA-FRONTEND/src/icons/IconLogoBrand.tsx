import { useNavigate } from "react-router-dom";
import LogoIcon from "./../assets/LogoBrandIcon.svg";
const IconLogoBrand = () => {
  let navigate = useNavigate();
  return (
    <img
      src={LogoIcon}
      onClick={() => {
        //navigate("/");
      }}
      alt=""
      className="w-[170px] h-[60px] cursor-pointer"
    />
  );
};
export default IconLogoBrand;
