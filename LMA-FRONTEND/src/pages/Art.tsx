import Navbar from "../components/Navbar/NavBarComponent";
import ImgTest from "./../assets/pexel.jpg";
import Footer from "../components/FooterComponent";
import IconCollection from "./../assets/collection.svg";
import IconFollower from "./../assets/Following.svg";
import IconShare from "./../assets/share.svg";
import { useParams } from "react-router-dom";
import { GET_ART } from "../queries/explore/getArt";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const ArtPage = (args: any) => {
  const { id } = useParams();
  const [getArt] = useLazyQuery(GET_ART);
  const [authorName, setAuthorName] = useState(undefined); // setting a flag to know the last list
  const [artName, setArtName] = useState(""); // setting a flag to know the last list
  const [authorId, setauthorId] = useState(undefined); // setting a flag to know the last list
  const [imageUrl, setImageURL] = useState(""); // setting a flag to know the last list
  const [profileUrl, setProfileURL] = useState(""); // setting a flag to know the last list
  const [bioText, setBioText] = useState(""); // setting a flag to know the last list
  const [followers, setFollowers] = useState(0); // setting a flag to know the last list
  const FetchArt = async () => {
    const ArtResponse = await getArt({ variables: { artID: id } });
    console.log(ArtResponse.data.art.data.attributes);
    const author =
      ArtResponse.data.art.data.attributes.author.data.attributes.username;
    setAuthorName(author);
    setArtName(ArtResponse.data.art.data.attributes.art_name)
    setauthorId(ArtResponse.data.art.data.attributes.author.data.id);
    setImageURL(
      `http://localhost:1338${ArtResponse.data.art.data.attributes.image_art.data.attributes.url}`
    );
    setProfileURL(`http://localhost:1338${ArtResponse.data.art.data.attributes.author.data.attributes.profile_picture.data.attributes.url}`);
    console.log(ArtResponse.data.art.data.attributes.author.data.id);
    setFollowers(ArtResponse.data.art.data.attributes.followers);
    setBioText(ArtResponse.data.art.data.attributes.art_bio);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    FetchArt();
  }, []);
  return (
    <div className="w-full h-full  bg-background ">
      <Navbar />
      <div className="flex flex-col items-center md:items-stretch md:pl-[150px] bg-background  py-[25px]">

        <p className="text-black font-bold pt-[15px] pb-[15px] text-[32px] break-words">
          {artName}
        </p>
        <div className="flex flex-col items-center md:flex-row gap-4 ">
          <img
            className="p-[10px]  md:p-0 md:w-[896px] md:h-[610px] rounded-[10px]"
            src={imageUrl ? imageUrl : ImgTest}
            alt={artName}

          />
          <div className="w-[278px] h-[610px] bg-background  p-[15px] rounded-[15px] border-solid border-2 border-black ">
            <div className="flex flex-row justify-center pt-[20px] ">

              <img src={profileUrl} alt="" className="w-[50px] h-[50px] rounded-full object-fill" />

              <div className="pl-[10px] flex flex-col">

                <a className="text-[#000000] text-[24px] font-semibold hover:underline hover:text-blue-800 visited:text-purple-600" href={`/explore/artist/${authorId}`} >{authorName}</a>
                <a className="text-[#000000] text-[14px] hover:underline" href={`/explore/artist/${authorId}`} >View all creations</a>
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
      </div>
      <Footer></Footer>
    </div>
  );
};
export default ArtPage;
