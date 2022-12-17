import { Button } from "../Button";
import LogoArt from "./../../icons/LogoBrand";
import SearchBar from "./../searchbar/searchbar";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar justify-start  md:justify-around">
      <LogoArt />
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
    </div>
  );
};
export default Navbar;
