import { useState } from "react";
import { Button } from "../Button";
import { MenuButton } from "../MenuButton";
import LogoArt from "./../../icons/LogoBrand";
import SearchBar from "./../searchbar/searchbar";
import "./navbar.css";
const Navbar = () => {
  const NavBarSyle =
    "navbar justify-between p-[15px] md:p-[0px] md:justify-around  drop-shadow-lg";
  const mobileBarStyle = "z-[1] fixed bg-[#6CB2FE] w-full h-full";
  const [toggle, setToggle] = useState(false);
  const [style, setStyle] = useState(NavBarSyle);

  const showMenu = () => {
    setStyle(toggle ? NavBarSyle : mobileBarStyle);
    setToggle(!toggle);
  };
  return (
    <header className={style}>
      {toggle == false && (
        <>
          <LogoArt />
          <MenuButton
            styleButton="md:hidden border-none"
            onClick={showMenu}
          ></MenuButton>
        </>
      )}

      {toggle == true && (
        <div>
          <nav className="flex flex-row justify-between p-[15px]">
          <LogoArt />
          <MenuButton
            styleButton="md:hidden border-none"
            onClick={showMenu}
          ></MenuButton>
          </nav>

          <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>
      )}
      <div className="hidden items-end md:flex md:flex-row md:items-center">
        <Button
          styleButton="mt-[43px] sm:mt-0  py-[2px] px-[5px]"
          styleText=""
          onClick={() => {}}
        >
          Home
        </Button>
        <Button
          styleButton="mt-[43px] sm:mt-0  py-[2px] px-[5px]"
          styleText=""
          onClick={() => {}}
        >
          About us
        </Button>
        <Button
          styleButton="mt-[43px] sm:mt-0  py-[2px] px-[5px]"
          styleText=""
          onClick={() => {}}
        >
          Look for Artists
        </Button>
        <Button
          styleButton="mt-[43px] sm:mt-0  py-[2px] px-[5px]"
          styleText=""
          onClick={() => {}}
        >
          Look for Employers
        </Button>
      </div>
      <div className="hidden md:flex md:flex-row items-center gap-x-2">
        <SearchBar />
        <Button
          styleButton="mt-[43px] sm:mt-0  py-[2px] px-[5px]"
          styleText=""
          onClick={() => {}}
        >
          Sign in
        </Button>
        <Button
          styleButton="mt-[43px] sm:mt-0 border-[#9E9C9C] py-[2px] px-[5px]"
          styleText=""
          onClick={() => {}}
        >
          Sign up
        </Button>
      </div>
    </header>
  );
};
export default Navbar;
