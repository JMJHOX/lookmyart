import Navbar from "../components/Navbar/navbar";
import { ExplorePaginator } from "../components/ExplorePaginator";
import ExploreBar from "../components/ExploreBar";
import InputBar from "../components/InputBar";
import ImgTest from "./../assets/pexel.jpg";
import Footer from "../components/footer";
const ArtPage = () => {
  return (
    <div className="w-full h-full bg-[#B6D9FF] ">
      <Navbar />
      <div className="flex flex-col items-center md:items-stretch md:pl-[150px]  bg-[#B6D9FF] ">
        <InputBar />
        <ExploreBar />{" "}
        <div className="flex flex-col md:flex-row gap-4">
          <img
            src={ImgTest}
            alt=""
            className="w-[896px] h-[610px]"
            width="896px"
            height="610px"
          />
          <div className="w-[278px] h-[610px] bg-[#9DCCFF] p-[15px]">
            <p >Artist Name</p>
            <p>
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
