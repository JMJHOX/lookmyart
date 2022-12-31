import Navbar from "../components/Navbar/navbar";
import { ExplorePaginator } from "../components/ExplorePaginator";

const ExplorePage = () => {
  return (
    <div className="w-full h-full bg-[#B6D9FF] ">
      <Navbar />

      <div className="flex flex-col items-center md:items-stretch md:pl-[150px]  bg-[#B6D9FF] ">
        <ExplorePaginator />
      </div>
    </div>
  );
};
export default ExplorePage;
