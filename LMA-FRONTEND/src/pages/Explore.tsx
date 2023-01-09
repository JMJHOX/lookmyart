import Navbar from "../components/Navbar/NavBarComponent";
import { ExplorePaginator } from "../components/Paginators/ExplorePaginator";
import { useEffect } from "react";

const ExplorePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full h-full bg-[#FFFFFF] ">
      <Navbar />

      <div className="flex flex-col items-center md:items-stretch md:pl-[150px]  bg-[#FFFFFF] ">
        <ExplorePaginator />
      </div>
    </div>
  );
};
export default ExplorePage;
