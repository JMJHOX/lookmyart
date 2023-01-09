import { useNavigate } from "react-router-dom";

import { Button } from "../../Buttons/ButtonComponent";
import InputBarComponent from "../../InputBarComponent";
import SubmitComponentV2 from "../../ProfileBarComponent";
import ButtonsElementsDesktop from "./ButtonsElementsDesktop";
import LogoArt from "../../../icons/IconLogoBrand";

interface Props {
  isAuth: boolean;
}
function NavBarElementsDesktop({ isAuth }: Props) {
  let navigate = useNavigate();
  return (
    <div className="hidden md:flex md:flex-col">
      <div className="hidden md:flex md:flex-row items-center gap-x-6">
        <LogoArt />
        <InputBarComponent></InputBarComponent>
        {!isAuth && (
          <>
            <Button
              styleButton="button-session"
              styleText=""
              onClick={() => {
                navigate("/login");
              }}
            >
              Log in
            </Button>
            <Button
              styleButton="button-session"
              styleText=""
              onClick={() => {
                navigate("/register");
              }}
            >
              Sign up
            </Button>
          </>
        )}

        {isAuth && <SubmitComponentV2></SubmitComponentV2>}
      </div>
      <div className="hidden items-end md:flex md:flex-col md:items-center">
        <ButtonsElementsDesktop></ButtonsElementsDesktop>
      </div>
    </div>
  );
}

export default NavBarElementsDesktop;
