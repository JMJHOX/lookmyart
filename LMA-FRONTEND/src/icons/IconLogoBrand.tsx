import React from "react";
import { useNavigate } from "react-router-dom";
import LogoIcon from "./../assets/LogoBrandIcon.svg";
const IconLogoBrand = () => {
  let navigate = useNavigate();
  return (
    <a
      href="#"
      onClick={() => {
        navigate("/");
      }}
    >
      <img src={LogoIcon} alt="" className="w-[112px] h-[30px] " />
    </a>
  );
};
export default IconLogoBrand;
