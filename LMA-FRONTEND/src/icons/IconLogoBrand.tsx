import React from "react";
import { useNavigate } from "react-router-dom";
import LogoIcon from "./../assets/LogoBrandIcon.svg";
const IconLogoBrand = () => {
  let navigate = useNavigate();
  return (
    <a
      href="#"
      onClick={() => {
       // navigate("/");
      }}
    >
      <img src={LogoIcon} alt="" className="w-[170px] h-[60px] " />
    </a>
  );
};
export default IconLogoBrand;
