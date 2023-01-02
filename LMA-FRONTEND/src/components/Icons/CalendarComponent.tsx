import React from "react";
import CalendarIcon from "./../../assets/Calendar.svg";
const CalendarIconComponent = () => {
  return (
    <div className="bg-[#B6D9FF] text-[#000000] text-[12px] md:text-[14px] flex flex-row gap-x-[2px] items-center ">
      <img src={CalendarIcon} alt="" className="w-[30px] h-[30px] " />
      <p>Joined February , 2020</p>
    </div>
  );
};
export default CalendarIconComponent;
