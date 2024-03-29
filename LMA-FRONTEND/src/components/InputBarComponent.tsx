import React, { useEffect, useState } from "react";
import FooterLine from "../icons/FooterLineIcon";
import { Button } from "./Buttons/ButtonComponent";
import SearchLook from "./../assets/search.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../services/apollo/store/store";
const InputBarComponent = () => {
  let navigate = useNavigate();
  const [search, setCurrentSearch] = useState(""); // storing current page number

  const userSearch: string = useSelector((state: RootState) => {
    return state.stateAuth.sessionUser.search;
  });

  useEffect(() => {
    if (!search.includes(userSearch)) {
      setCurrentSearch(search + " " + userSearch);

    }
    //console.log(userSearch);
  }, [userSearch]);

  return (
    <div className=" md:h-[56px] flex w-full  flex-col justify-stretch  ">
      <div className="flex flex-row justify-center  items-center  ">
        <input
          type="text"
          value={search}
          onChange={(event) => {
            setCurrentSearch(event.target.value);
          }}
          onKeyDownCapture={(event) => {
            if (event.key === "Enter") {
              console.log(event.currentTarget.value);
              navigate(`explore/${event.currentTarget.value}`);
            }
          }}
          className="mt-0 w-full h-[43px] md:w-[713px] md:h-[54px]  rounded-[25px] rounded-r-[0px] pl-[25px]  text-black bg-[#FFFFFF] outline outline-1 outline-[#22BAFB]"
          placeholder="Search art"
        />
        <Button
          styleButton="mt-0 w-[105px] h-[56px]  py-[2px] px-[5px] rounded-[25px] rounded-l-[0px] bg-[#22BAFB] "
          styleText=" flex justify-center"
          onClick={() => { }}
        >
          <img className="w-[30px] h-[30px]" src={SearchLook} alt="Your SVG" />
        </Button>
      </div>
    </div>
  );
};
export default InputBarComponent;
