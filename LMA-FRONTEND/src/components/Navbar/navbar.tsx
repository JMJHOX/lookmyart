import { useEffect, useState } from "react";
import { Button } from "../Button";
import { MenuButton } from "../MenuButton";
import LogoArt from "./../../icons/LogoBrand";
import { useNavigate } from "react-router-dom";
import SearchBar from "./../searchbar/searchbar";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/apollo/store/store";
import SubmitComponent from "../SubmitComponent";
import { useLazyQuery } from "@apollo/client";
import { GET_SESSION } from "../../queries/profile/getprofile";
import {
  ChangeUsername,
  ChangeUUID,
} from "../../services/apollo/store/userAuth";

const Navbar = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [getSession] = useLazyQuery(GET_SESSION);

  const NavBarSyle =
    "navbar justify-between p-[15px] md:p-[0px] md:justify-around  drop-shadow-lg";
  const mobileBarStyle = "z-[1] fixed bg-[#6CB2FE] w-full h-full";

  const isAuth: boolean = useSelector((state: RootState) => {
    return state.stateAuth.auth;
  });

  const FetchSession = async () => {
    const SessionUser = await getSession();
    if (isAuth == true) {
      dispatch(ChangeUUID(SessionUser.data.me.id));
      dispatch(ChangeUsername(SessionUser.data.me.username));
    }
  };

  const showMenu = () => {
    setStyle(toggle ? NavBarSyle : mobileBarStyle);
    setToggle(!toggle);
  };

  useEffect(() => {
    FetchSession();
  }, [isAuth]);

  const [toggle, setToggle] = useState(false);
  const [style, setStyle] = useState(NavBarSyle);
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

          <div className=" items-end flex flex-col items-center">
            <Button
              styleButton="mt-[43px] sm:mt-0  py-[2px] px-[5px]"
              styleText=""
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button
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
            </Button>
          </div>
          <div className="items-end flex flex-col items-center">
            <SearchBar />
            {!isAuth && (
              <>
                <Button
                  styleButton="mt-[43px] sm:mt-0  py-[2px] px-[5px]"
                  styleText=""
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
                <Button
                  styleButton="mt-[43px] sm:mt-0 border-[#9E9C9C] py-[2px] px-[5px]"
                  styleText=""
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Sign up
                </Button>
              </>
            )}

            {isAuth && <SubmitComponent></SubmitComponent>}
          </div>
        </div>
      )}
      <div className="hidden items-end md:flex md:flex-row md:items-center">
        <Button
          styleButton="mt-[43px] sm:mt-0  py-[2px] px-[5px]"
          styleText=""
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
        <Button
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
        </Button>
      </div>
      <div className="hidden md:flex md:flex-row items-center gap-x-2">
        <SearchBar />

        {!isAuth && (
          <>
            <Button
              styleButton="mt-[43px] sm:mt-0  py-[2px] px-[5px]"
              styleText=""
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
            <Button
              styleButton="mt-[43px] sm:mt-0 border-[#9E9C9C] py-[2px] px-[5px]"
              styleText=""
              onClick={() => {
                navigate("/register");
              }}
            >
              Sign up
            </Button>
          </>
        )}
        {isAuth && <SubmitComponent></SubmitComponent>}
      </div>
    </header>
  );
};
export default Navbar;
