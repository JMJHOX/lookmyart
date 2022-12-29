import Navbar from "../components/Navbar/navbar";
import ExploreBar from "../components/ExploreBar";
import InputBar from "../components/InputBar";
import ImgTest from "./../assets/pexel.jpg";
import Footer from "../components/footer";
import IconProfile from "../icons/IconProfile";
import IconCollection from "./../assets/collection.svg";
import IconFollower from "./../assets/Following.svg";
import IconShare from "./../assets/share.svg";

const ArtPage = () => {
  return (
    <div className="w-full h-full bg-[#B6D9FF] ">
      <Navbar />
      <div className="flex flex-col items-center md:items-stretch md:pl-[150px]  bg-[#B6D9FF] ">
        <InputBar />
        <ExploreBar />{" "}
        <div className="flex flex-col md:flex-row gap-4 ">
          <img
            src={ImgTest}
            alt=""
            className="w-[896px] h-[610px]"
            width="896px"
            height="610px"
          />
          <div className="w-[278px] h-[610px] bg-[#9DCCFF] p-[15px] rounded-[15px]">
            <div className="flex flex-row justify-center pt-[20px]">
              <IconProfile></IconProfile>
              <div className="pl-[10px]">
                <a href="/explore/artist/:id">
                  <p className="text-[#000000] text-[24px] font-semibold">
                    Artist Name
                  </p>
                </a>

                <p className="text-[#000000] text-[14px]">
                  View all {"{size_arts}"} creations
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-between pt-[15px]">
              <div className="flex flex-col  items-center">
                <img src={IconFollower} alt="" className="w-[30px] h-[30px]" />
                <p className="text-[#000000] font-semibold text-[14px]">
                  {"{follows}"}
                </p>
              </div>
              <img src={IconShare} alt="" className="w-[30px] h-[30px]" />
              <img src={IconCollection} alt="" className="w-[30px] h-[30px]" />
            </div>

            <p className="text-[#000000] pt-[15px] text-[16px]">
              La vida de un artista es dura, pero hay que saber siempre
              sobrellevarla de la mejor manera posible sin descanso alguno. Lo
              mejor es vivir la vida como si no importara, así nada te afectará
              como piensas
            </p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default ArtPage;
