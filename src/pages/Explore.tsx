import { Button } from "../components/Button";
import ExploreBar from "../components/ExploreBar";
import Footer from "../components/footer";
import Navbar from "../components/Navbar/navbar";
import SearchLook from "./../assets/search.svg";
import { ExplorePaginator } from "../components/ExplorePaginator";

const ExplorePage = () => {
  return (
    <div className="w-full h-full bg-[#B6D9FF]">
      <Navbar />
      <div className="w-full flex flex-col items-center justify-stretch  py-[75px] ">
        <div className="flex flex-row justify-center">
          <input
            type="text"
            className=" w-[890px] h-[43px] rounded-[25px] rounded-r-[0px] pl-[25px] outline-none text-black"
            placeholder="Search art"
          />
          <Button
            styleButton="mt-[43px] sm:mt-0 w-[106px] h-[43px]  py-[2px] px-[5px] rounded-[25px] rounded-l-[0px] bg-[#6CB2FE] grow-[2]"
            styleText=" flex justify-center"
            onClick={() => {}}
          >
            <img
              className="w-[30px] h-[30px]"
              src={SearchLook}
              alt="Your SVG"
            />
          </Button>
        </div>
      </div>
      <div className="flex flex-col pl-[150px]  bg-[#B6D9FF] ">
        <ExploreBar />
        <ExplorePaginator />
      </div>
      <Footer />
    </div>
  );
};
export default ExplorePage;
