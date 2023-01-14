import Navbar from "../components/Navbar/NavBarComponent";
import ExploreBar from "../components/Searches/ExploreButtonOptionsBar";
import ImgTest from "./../assets/pexel.jpg";
import UserProfile from "./../assets/profiles/ProfileBlack.svg";
import Footer from "../components/FooterComponent";
import CalendarIconComponent from "../components/Icons/CalendarIconComponent";
import { useQuery } from "@apollo/client";
import { QUERY_GET_USERS } from "../queries/Users/getUser";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EmailIconComponent from "../components/Icons/EmailIconComponent";
import NumberIconComponent from "../components/Icons/NumberIconComponent";
import WebsiteIconComponent from "../components/Icons/WebsiteIconComponent";
const ArtistPage = () => {
  const { id } = useParams();
  const [authorName, setAuthorName] = useState(""); // setting a flag to know the last list
  const { data, loading } = useQuery(QUERY_GET_USERS, {
    variables: { userId: id },
  });

  useEffect(() => {
    if (data) {
      console.log(data.usersPermissionsUser.data.attributes.username);
      setAuthorName(data.usersPermissionsUser.data.attributes.username);
    }
  }, [data]);
  //

  return (
    <div className="w-full h-full  ">
      <Navbar />
      <div className="flex flex-col items-center md:items-stretch md:pl-[150px]  bg-background ">
        <ExploreBar />
        <div className="flex flex-col md:flex-col gap-12 py-[100px]">
          <div className="relative">
            <img src={ImgTest} alt="" className="w-[1180px] h-[235px]" />
            <img
              src={UserProfile}
              alt=""
              className="w-[131px] h-[131px] absolute top-[155px]"
            />
          </div>

          <div className=" flex flex-row justify-between  h-[135px]">
            <div className="flex flex-col  flex-start pl-[5px] pt-[5px] w-1/4">
              <p className="text-black text-[24px] font-semibold">
                {authorName}
              </p>
              <p className="text-black">{"{nacionality}"}</p>
              <p className="text-black">{"{specialty}"}</p>
            </div>
            <div className="flex flex-col  w-1/2 gap-y-10">
              <p className="text-black">
                The life of an artist is hard, but you have to always know how
                to cope with it in the best possible way without any rest. The
                best thing is to live life as if it doesn't matter, so nothing
                will affect you as you think
              </p>
              <div className="flex flex-row justify-between">
                <EmailIconComponent></EmailIconComponent>
                <NumberIconComponent></NumberIconComponent>
                <WebsiteIconComponent></WebsiteIconComponent>
              </div>
            </div>
            <div className="flex flex-col items-center  justify-end w-1/4">
              <CalendarIconComponent></CalendarIconComponent>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default ArtistPage;
