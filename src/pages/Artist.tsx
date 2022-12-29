import Navbar from "../components/Navbar/navbar";
import { ExplorePaginator } from "../components/ExplorePaginator";
import ExploreBar from "../components/ExploreBar";
import InputBar from "../components/InputBar";
import ImgTest from "./../assets/pexel.jpg";
import Footer from "../components/footer";
const ArtistPage = () => {
  return (
    <div className="w-full h-full bg-[#B6D9FF] ">
      <Navbar />
      <div className="flex flex-col items-center md:items-stretch md:pl-[150px]  bg-[#B6D9FF] ">
        <InputBar />
        <ExploreBar />{" "}
        <div className="flex flex-col md:flex-col gap-4">
          <img
            src={ImgTest}
            alt=""
            className="w-[896px] h-[610px]"
            width="896px"
            height="610px"
          />
          <div className=" flex flex-row justify-between  h-[135px]">
            <div className="flex flex-col items-center w-1/4">
              <p className="text-[#000000]">Artist Name</p>
              <p className="text-[#000000]">{"{nacionality}"}</p>
              <p className="text-[#000000]">{"{specialty}"}</p>
            </div>
            <div className="flex flex-col  w-1/2">
              <p className="text-[#000000]">
                The life of an artist is hard, but you have to always know how
                to cope with it in the best possible way without any rest. The
                best thing is to live life as if it doesn't matter, so nothing
                will affect you as you think
              </p>
              <div>icon1 icon2 icon3</div>
            </div>
            <div className="flex flex-col items-center  w-1/4"><p>date</p> </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default ArtistPage;
