import { useNavigate } from "react-router-dom";

import { Button } from "../../Buttons/ButtonComponent";

import { MenuButtonComponent } from "../../Buttons/MenuButtonComponent";
import ProfileBarComponent from "../../ProfileBarComponent";
import ButtonsElementsMobile from "./ButtonsElementsMobile";

interface Props {
  isAuth: boolean;
  toggle: boolean;
  styleMobile: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
function NavBarElementsMobile({ isAuth, styleMobile, toggle, onClick }: Props) {
  let navigate = useNavigate();
  return (
    <>
      {toggle == false && (
        <>
          <MenuButtonComponent
            styleButton="md:hidden  border-none"
            styleIcons="flex flex-row items-center justify-center"
            onClick={onClick}
            toggle={toggle}
          ></MenuButtonComponent>
        </>
      )}

      {toggle == true && (
        <div className={styleMobile}>
          <nav className="flex flex-row justify-between  p-[15px]">
            <MenuButtonComponent
              styleButton="md:hidden border-none"
              styleIcons="flex flex-row items-center justify-center"
              onClick={onClick}
              toggle={toggle}
            ></MenuButtonComponent>
          </nav>
          <div className="fixed h-full text-black items-center w-full">
            <ButtonsElementsMobile></ButtonsElementsMobile>
            <div className="items-end flex flex-col items-center  ">
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

              {isAuth && <ProfileBarComponent></ProfileBarComponent>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default NavBarElementsMobile;
