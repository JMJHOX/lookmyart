import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBarComponent.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/apollo/store/store";
import { useLazyQuery } from "@apollo/client";
import { GET_SESSION } from "../../queries/profile/getprofile";
import {

  ChangeEmail,
  ChangeProfile,
  ChangeUsername,
  ChangeUUID,
} from "../../services/apollo/store/userAuth";
import NavBarElementsDesktop from "./elements/NavBarElementsDesktop";
import NavBarElementsMobile from "./elements/NavBarElementsMobile";
import { QUERY_GET_USERS } from "../../queries/Users/getUser";


const Navbar = () => {
  const dispatch = useDispatch();

  const [getSession] = useLazyQuery(GET_SESSION);
  const [getProfileDetails] = useLazyQuery(QUERY_GET_USERS);

  const DesktopBarStyle =
    "navbar justify-between p-[15px]  md:pt-[5px] md:p-[0px] md:justify-around ";
  const mobileBarStyle =
    " fixed z-[1] bg-background h-full w-full transition  will-change-auto  delay-100 duration-300";
  const mobileBarOpenStyle =
    "";
  const isAuth: boolean = useSelector((state: RootState) => {
    return state.stateAuth.auth;
  });

  const FetchSession = async () => {
    const SessionUser = await getSession();
    console.log(SessionUser.data)
    if (isAuth == true) {
      dispatch(ChangeUUID(SessionUser.data.me.id));
      
      dispatch(ChangeUsername(SessionUser.data.me.username));
      dispatch(ChangeEmail(SessionUser.data.me.email));
      const profileDetails = await getProfileDetails({ variables: { userId: SessionUser.data.me.id } });
      if (profileDetails.data) {
        const ProfileInformation = profileDetails.data
        console.log("adw",ProfileInformation)
        const ProfileUrl = `http://localhost:1338${ProfileInformation.usersPermissionsUser.data.attributes.profile_picture.data.attributes.url}` 
        dispatch(ChangeProfile(ProfileUrl));
        
      }
    }
  };

  const showMenu = () => {
    setStyle(toggle ? DesktopBarStyle : mobileBarStyle);
    setToggle(!toggle);
  };

  useEffect(() => {
    FetchSession();
  }, [isAuth]);

  const [toggle, setToggle] = useState(false);
  const [style, setStyle] = useState(DesktopBarStyle);
  return (
    <header className={style}>
      <NavBarElementsMobile
        toggle={toggle}
        isAuth={isAuth}
        styleMobile={mobileBarOpenStyle}
        onClick={showMenu}
      ></NavBarElementsMobile>

      <NavBarElementsDesktop isAuth={isAuth}></NavBarElementsDesktop>
    </header>
  );
};
export default Navbar;
