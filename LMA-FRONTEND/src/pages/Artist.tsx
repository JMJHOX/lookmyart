import Navbar from "../components/Navbar/NavBarComponent";
import ExploreBar from "../components/Searches/ExploreButtonOptionsBar";
import BackgroundProfile from "./../assets/pexel.jpg";
import UserProfile from "./../assets/profiles/ProfileBlack.svg";
import Footer from "../components/FooterComponent";
import CalendarIconComponent from "../components/Icons/CalendarIconComponent";
import { useQuery } from "@apollo/client";
import { QUERY_GET_USERS } from "../queries/Users/getUser";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EmailIconComponent from "../components/Icons/EmailIconComponent";
import NumberIconComponent from "../components/Icons/NumberIconComponent";
import WebsiteIconComponent from "../components/Icons/WebsiteIconComponent";
import { SelectCountryComponent } from "../components/Selectors/SelectCountryComponent";
const ArtistPage = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(QUERY_GET_USERS, {
    variables: { userId: id },
  });
  const [ArtistProfile, setArtistProfile] = useState({
    username: "",
    profile_url: "",
    background_url: "",
    contact_number: "",
    datetime: "",
    email: "",
    art_collection: [{}],
    website_url: "",
    profile_description: "",
    country: "PA"

  })
  useEffect(() => {
    if (data) {
      let background_url = ""
      let profile_url = ""
      let art_collected = [{}]

      console.log(data.usersPermissionsUser.data.attributes);
      const userProfileData = data.usersPermissionsUser.data.attributes
      const BackgroundReceivedData = userProfileData.background_profile.data
      const ProfilePictureReceivedData = userProfileData.profile_picture.data
      const ArtReceivedData = userProfileData.arts.data
      if (BackgroundReceivedData) {
        background_url = `http://localhost:1338${BackgroundReceivedData.attributes.url}`
      }
      if (ProfilePictureReceivedData) {
        profile_url = `http://localhost:1338${ProfilePictureReceivedData.attributes.url}`
      }


      if (ArtReceivedData) {
        art_collected = ArtReceivedData
        console.log(art_collected)
        console.log(userProfileData.arts)
      }

      setArtistProfile({
        username: data.usersPermissionsUser.data.attributes.username,
        profile_url: profile_url,
        background_url: background_url,
        art_collection: art_collected,
        contact_number: data.usersPermissionsUser.data.attributes.contact_number,
        email: data.usersPermissionsUser.data.attributes.email,
        datetime:data.usersPermissionsUser.data.attributes.createdAt,
        website_url: data.usersPermissionsUser.data.attributes.website_url,
        profile_description: data.usersPermissionsUser.data.attributes.profile_desc,
        country: data.usersPermissionsUser.data.attributes.country ? data.usersPermissionsUser.data.attributes.country : "PA"
      })

    }
  }, [data]);
  //

  return (
    <div className="w-full h-screen  ">
      <Navbar />
      <div className="flex flex-col items-center md:items-stretch md:pl-[150px]  md:pr-[150px] bg-background  ">

        <div className="flex flex-col md:flex-col gap-12 ">
          <div className="relative mx-auto md:mx-0 ">
            <img src={ArtistProfile.background_url ? ArtistProfile.background_url : BackgroundProfile} alt="" className="md:w-[1180px] md:h-[235px] w-screen h-fit object-cover" />
            <img
              src={ArtistProfile.profile_url ? ArtistProfile.profile_url : UserProfile}
              alt=""
              className="w-[131px] h-[131px] absolute top-[155px] rounded-full object-fill"
            />
          </div>

          <div className=" flex flex-col md:flex-row justify-between  md:h-[135px]">
            <div className="flex flex-col  flex-start pl-[5px] pt-[5px] w-screen md:w-1/4">
              <p className="text-black text-[24px] font-semibold break-words">
                {ArtistProfile.username}
              </p>
              <div className="md:w-1/2">
                <SelectCountryComponent
                  setCountry={ArtistProfile.country}
                  country={ArtistProfile.country}
                  disabled={true}
                ></SelectCountryComponent>
              </div>
              {/**** MOBILE****/}
              <div className=" block md:hidden pb-[10px]">
                <p className="text-black pb-[15px] pt-[10px]">
                  {ArtistProfile.profile_description}
                </p>

                {ArtistProfile.email && <EmailIconComponent email={ArtistProfile.email}></EmailIconComponent>}
                {ArtistProfile.contact_number && <NumberIconComponent number={ArtistProfile.contact_number}></NumberIconComponent>}
                {ArtistProfile.website_url && <WebsiteIconComponent url={ArtistProfile.website_url}></WebsiteIconComponent>}
                {ArtistProfile.datetime && <CalendarIconComponent date={ArtistProfile.datetime}></CalendarIconComponent>} 

              </div>
              {/****END MOBILE****/}

            </div>




            {/**** DESKTOP****/}
            <div className="flex flex-col  w-1/2 gap-y-10 hidden md:block">
              <p className="text-black">
                {ArtistProfile.profile_description}
              </p>
              <div className="flex flex-col justify-between">
                {ArtistProfile.email && <EmailIconComponent email={ArtistProfile.email}></EmailIconComponent>}
                {ArtistProfile.contact_number && <NumberIconComponent number={ArtistProfile.contact_number}></NumberIconComponent>}
                {ArtistProfile.website_url && <WebsiteIconComponent url={ArtistProfile.website_url}></WebsiteIconComponent>}
              </div>
            </div>
            <div className="flex flex-col items-center  justify-end w-1/4  hidden md:block">
             {ArtistProfile.datetime && <CalendarIconComponent date={ArtistProfile.datetime}></CalendarIconComponent>} 
            </div>
            {/****END DESKTOP****/}
          </div>
          <div className="items-center w-fit">
            <p className="text-black text-[24px] font-semiboldpb-[15px] pt-[10px]">
              {"Obras"}
            </p>

            <div className="flex flex-wrap">

              {ArtistProfile.art_collection && ArtistProfile.art_collection?.map((ImageInfo, index) => (

                <div key={index} className="w-1/2 md:w-1/5  lg:w-1/4 xl:w-1/6 p-2 ">
                  <Link to={`/explore/arts/${ImageInfo?.id}`}>
                    <img src={`http://localhost:1338${ImageInfo?.attributes?.image_art.data.attributes.url}`} alt={`Image ${index}`} className="w-full h-auto rounded-[25px]" />
                  </Link>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default ArtistPage;
