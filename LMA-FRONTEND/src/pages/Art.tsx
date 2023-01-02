import Navbar from "../components/Navbar/NavBarComponent";
import ExploreBar from "../components/Searches/ExploreBar";
import InputBar from "../components/InputBarComponent";
import ImgTest from "./../assets/pexel.jpg";
import Footer from "../components/FooterComponent";
import IconProfile from "../icons/IconProfile";
import IconCollection from "./../assets/collection.svg";
import IconFollower from "./../assets/Following.svg";
import IconShare from "./../assets/share.svg";
import { useParams } from "react-router-dom";
import { GET_ART } from "../queries/explore/getArt";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const ArtPage = (args: any) => {
  console.log(args);
  const { id } = useParams();
  const [getArt] = useLazyQuery(GET_ART);
  const [authorName, setAuthorName] = useState(undefined); // setting a flag to know the last list
  const [imageUrl, setImageURL] = useState(""); // setting a flag to know the last list
  const [bioText, setBioText] = useState(""); // setting a flag to know the last list
  const [followers, setFollowers] = useState(0); // setting a flag to know the last list
  const FetchArt = async () => {
    const ArtResponse = await getArt({ variables: { artID: id } });
    console.log(
      ArtResponse.data.art.data.attributes
    );

    const artName = "";
    const author =
      ArtResponse.data.art.data.attributes.author.data.attributes.username;
    setAuthorName(author);
    setImageURL(`http://localhost:1338${ArtResponse.data.art.data.attributes.image_art.data.attributes.url}`);
    setFollowers(ArtResponse.data.art.data.attributes.followers)
    setBioText(ArtResponse.data.art.data.attributes.art_bio)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    FetchArt();
  }, []);
  return (
    <div className="w-full h-full bg-[#B6D9FF] ">
      <Navbar />
      <div className="flex flex-col items-center md:items-stretch md:pl-[150px]  bg-[#B6D9FF] ">
        <InputBar />
        <ExploreBar />{" "}
        <div className="flex flex-col md:flex-row gap-4 ">
          <img
            src={imageUrl ? imageUrl : ImgTest}
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
                    {authorName}
                  </p>
                </a>

                <p className="text-[#000000] text-[14px]">
                  View all  creations
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-between pt-[15px]">
              <div className="flex flex-col  items-center">
                <img src={IconFollower} alt="" className="w-[30px] h-[30px]" />
                <p className="text-[#000000] font-semibold text-[14px]">
                  {followers}
                </p>
              </div>
              <img src={IconShare} alt="" className="w-[30px] h-[30px]" />
              <img src={IconCollection} alt="" className="w-[30px] h-[30px]" />
            </div>

            <p className="text-[#000000] pt-[15px] text-[16px] break-words">
             {bioText}
            </p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default ArtPage;
