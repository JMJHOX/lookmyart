import Navbar from "../components/Navbar/NavBarComponent";
import ExploreBar from "../components/Searches/ExploreButtonOptionsBar";
import BackgroundProfile from "./../assets/pexel.jpg";
import UserProfile from "./../assets/profiles/ProfileBlack.svg";
import Footer from "../components/FooterComponent";
import CalendarIconComponent from "../components/Icons/CalendarIconComponent";
import { useQuery } from "@apollo/client";
import { QUERY_GET_USERS } from "../queries/Users/getUser";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EmailIconComponent from "../components/Icons/EmailIconComponent";
import NumberIconComponent from "../components/Icons/NumberIconComponent";
import WebsiteIconComponent from "../components/Icons/WebsiteIconComponentV2";
import { SelectCountryComponent } from "../components/Selectors/SelectCountryComponent";
const ArtistPage = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(QUERY_GET_USERS, {
    variables: { userId: id },
  });
  const [ArtistProfile, setArtistProfile] = useState({
    username: "",
    contact_number: "",
    email: "",
    website_url: "",
    profile_description: "",
    country: "PA"

  })
  const [setCountry] = useState("PA")
  useEffect(() => {
    if (data) {
      console.log(data.usersPermissionsUser.data.attributes);

      setArtistProfile({
        username: data.usersPermissionsUser.data.attributes.username,
        contact_number: data.usersPermissionsUser.data.attributes.contact_number,
        email: data.usersPermissionsUser.data.attributes.email,
        website_url: data.usersPermissionsUser.data.attributes.website_url,
        profile_description: data.usersPermissionsUser.data.attributes.profile_desc,
        country: data.usersPermissionsUser.data.attributes.country ? data.usersPermissionsUser.data.attributes.country : "PA"
      })

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
            <img src={BackgroundProfile} alt="" className="w-[1180px] h-[235px]" />
            <img
              src={UserProfile}
              alt=""
              className="w-[131px] h-[131px] absolute top-[155px]"
            />
          </div>

          <div className=" flex flex-row justify-between  h-[135px]">
            <div className="flex flex-col  flex-start pl-[5px] pt-[5px] w-1/4">
              <p className="text-black text-[24px] font-semibold">
                {ArtistProfile.username}
              </p>
              <div className="w-1/2">
                <SelectCountryComponent
                  setCountry={setCountry}
                  country={ArtistProfile.country}
                  disabled={true}
                ></SelectCountryComponent>
              </div>

            </div>
            <div className="flex flex-col  w-1/2 gap-y-10">
              <p className="text-black">
                {ArtistProfile.profile_description}
              </p>
              <div className="flex flex-row justify-between">
                {ArtistProfile.email && <EmailIconComponent email={ArtistProfile.email}></EmailIconComponent>}
                {ArtistProfile.contact_number && <NumberIconComponent number={ArtistProfile.contact_number}></NumberIconComponent>}
                {ArtistProfile.website_url && <WebsiteIconComponent url={ArtistProfile.website_url}></WebsiteIconComponent>}
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
