import React from "react";
import MenuButtonClose from "./../assets/menuButtonClose.svg";
import menuButtonOpen from "./../assets/menuButtonOpen.svg";
const MenuButtonOpenIcon = () => {
  return <img src={menuButtonOpen} alt="" className="w-[44px] h-[44px] " />;
};

const MenuButtonCloseIcon = () => {
  return <img src={MenuButtonClose} alt="" className="w-[44px] h-[44px] " />;
};
export { MenuButtonOpenIcon, MenuButtonCloseIcon };
