import Navbar from "../components/Navbar/navbar";
import ExploreBar from "../components/ExploreBar";
import InputBar from "../components/InputBar";
import ImgTest from "./../assets/pexel.jpg";
import UserProfile from "./../assets/ProfileWhite.svg";
import Footer from "../components/footer";
import SubmitComponent from "../components/SubmitComponent";
import CalendarComponent from "../components/CalendarComponent";
const ArtistPage = () => {
  return (
    <div className="w-full h-full bg-[#B6D9FF] ">
      <Navbar />
      <div className="flex flex-col items-center md:items-stretch md:pl-[150px]  bg-[#B6D9FF] ">
        <InputBar />
        <ExploreBar />{" "}
        <div className="flex flex-col md:flex-col gap-12 ">
          <div className="relative">
            <img src={ImgTest} alt="" className="w-[1180px] h-[245px]" />
            <img
              src={UserProfile}
              alt=""
              className="w-[131px] h-[131px] absolute top-[155px]"
            />
          </div>

          <div className=" flex flex-row justify-between  h-[135px]">
            <div className="flex flex-col  flex-start pl-[5px] pt-[5px] w-1/4">
              <p className="text-[#000000] text-[24px] font-semibold">
                Artist Name
              </p>
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
              <div>icon1 icon2 icon3 </div>
            </div>
            <div className="flex flex-col items-center  w-1/4">
              <CalendarComponent></CalendarComponent>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default ArtistPage;
