import Navbar from "../components/Navbar/NavBarComponent";
import { ExplorePaginator } from "../components/Paginators/ExplorePaginator";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../services/apollo/store/store";

const ProfilePage = () => {
  const userName: string = useSelector((state: RootState) => {
    return state.stateAuth.username;
  });
  return (
    <div className="w-full h-full bg-[#B6D9FF] ">
      <Navbar />

      <div className="flex flex-col items-center md:items-stretch md:pl-[150px]  bg-[#B6D9FF] ">
        <p>My name is {userName}</p>
      </div>
    </div>
  );
};
export default ProfilePage;
