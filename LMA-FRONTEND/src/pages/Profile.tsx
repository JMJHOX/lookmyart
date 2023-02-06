import Navbar from "../components/Navbar/NavBarComponent";
import { useSelector } from "react-redux";
import { RootState } from "../services/apollo/store/store";
import { Button } from "../components/Buttons/ButtonComponent";
import UserProfile from "./../assets/profiles/ProfileBlack.svg";
import ChangeIcon from "./../assets/icons/change-email-icon.svg";
import AddBGImage from "./../assets/icons/add-image-bg-icon.svg";
import bgIconShow from "./../assets/bg-icon.svg";
import WhiteMailIconComponent from "../components/Icons/WhiteMailIconComponent";
import NumberIconComponentV2 from "../components/Icons/NumberIconComponentV2";
import WebsiteIconComponentV2 from "../components/Icons/WebsiteIconComponentV2";
import Footer from "../components/FooterComponent";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SelectCountryComponent } from "../components/Selectors/SelectCountryComponent";
import { IProfileFormValues } from "../interfaces/profile";
import { SUBMIT_PROFILE } from "../queries/Users/updateUser";
import { useMutation, useQuery } from "@apollo/client";
import { userProfileSubmit, UsersPermissionsUserInput } from "../interfaces/users";
import { QUERY_GET_USERS } from "../queries/Users/getUser";
import { SUBMIT_IMAGE } from "../queries/Submit/submit_image";
import Swal from "sweetalert2";


const ProfilePage = () => {
  const [country, setCountry] = useState("PA");
  const [previewProfile, setPreviewProfile] = useState(UserProfile)
  const [previewBackground, setPreviewBackground] = useState(bgIconShow)
  const [previousInfo, setPreviousInfo] = useState({
    contact_number: "",
    website_url: "",
    profile_description: ""

  })
  const refProfile = useRef<HTMLInputElement | null>(null);
  const refBackground = useRef<HTMLInputElement | null>(null);

  const userSession = useSelector((state: RootState) => state.stateAuth.sessionUser);
  const userInfoProfile = useQuery(QUERY_GET_USERS, {
    variables: { userId: userSession.uuid },
  });


  const [UserUploadImage] = useMutation(SUBMIT_IMAGE);
  const [userUpdateProfile] = useMutation(SUBMIT_PROFILE);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfileFormValues>();


  const [profilePhotoFiles, setProfilePhotoFiles] = useState<FileList | null>(
    null
  );
  const [BackgroundPhotoFiles, setBackgroundPhotoFiles] =
    useState<FileList | null>(null);



  const SubmitProcess: SubmitHandler<IProfileFormValues> = async (
    formValues
  ) => {
    console.log(formValues);
    console.log(profilePhotoFiles);

    if (profilePhotoFiles) {
      let img = new Image();
      img.src = window.URL.createObjectURL(profilePhotoFiles[0]);
      img.onload = () => {
        console.log(img.width);
        console.log(img.height);
      };
    }

    console.log(country);
    try {
      let payload = new UsersPermissionsUserInput()

      if (profilePhotoFiles) {
        const uploadResultProfilePicture = await UserUploadImage({
          variables: { FormData: profilePhotoFiles[0] },
        });
        const imageIdProfile = uploadResultProfilePicture.data.upload.data.id;
        payload.profile_picture = imageIdProfile
      }
      if (BackgroundPhotoFiles) {
        const uploadResultProfileBackground = await UserUploadImage({
          variables: { FormData: BackgroundPhotoFiles[0] },
        });
        const imageIdProfileBackground = uploadResultProfileBackground.data.upload.data.id;
        payload.background_profile = imageIdProfileBackground
      }


      payload.contact_number = formValues.number ? formValues.number : previousInfo.contact_number
      payload.website_url = formValues.website ? formValues.website : previousInfo.website_url
      payload.profile_desc = formValues.profile_desc ? formValues.profile_desc : previousInfo.profile_description
      payload.country = country

      const userEntity: userProfileSubmit = {
        userId: userSession.uuid,
        data: payload
      }
      const userProfileUpdateResponse = await userUpdateProfile({
        variables: userEntity
      });
      if (userProfileUpdateResponse) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your profile has been updated',
          showConfirmButton: false,
          timer: 1500
        })
      }

    } catch (e) {
      console.log(e);
    }
  };




  useEffect(() => {
    // create the preview
    if (profilePhotoFiles) {
      const objectUrl = URL.createObjectURL(profilePhotoFiles[0])
      setPreviewProfile(objectUrl)
      return () => URL.revokeObjectURL(objectUrl)
    }

    if (BackgroundPhotoFiles) {
      const objectUrl = URL.createObjectURL(BackgroundPhotoFiles[0])
      setPreviewBackground(objectUrl)
      return () => URL.revokeObjectURL(objectUrl)
    }


  }, [profilePhotoFiles, BackgroundPhotoFiles])


  useEffect(() => {
    if (userInfoProfile.data) {
      const userPreviousInfoProfile = userInfoProfile.data?.usersPermissionsUser
      console.log("a", userPreviousInfoProfile)
      if (userPreviousInfoProfile.data) {
        console.log("asa")
        setCountry(userPreviousInfoProfile.data.attributes.country)
        setPreviousInfo({
          contact_number: userPreviousInfoProfile.data.attributes.contact_number,
          website_url: userPreviousInfoProfile.data.attributes.website_url,
          profile_description: userPreviousInfoProfile.data.attributes.profile_desc
        })
      }

    }
  }, [userInfoProfile.data]);

  return (
    <div className="w-full h-full   bg-background ">
      <Navbar />

      <form
        onSubmit={handleSubmit(SubmitProcess)}
        className="flex flex-col items-center md:items-stretch md:pl-[150px] text-black bg-background pb-[15px]"
      >
        <div
          id="profile_information"
          className="flex flex-row gap-x-[10px] items-center pb-[15px]"
        >
          <div className="relative">
            <img
              src={previewProfile}
              onClick={() => { }}
              alt=""
              className="w-[130px] h-[130px] rounded-full "
            />
            <div
              className="absolute bottom-[15px] right-[5px] bg-[#D8E5EA] w-[31px]    rounded-full  hover:bg-[gray] hover:text-[blue] cursor-pointer  "
              onClick={() => {
                if (refProfile) {
                  refProfile.current?.click();
                }
              }}
            >
              <div className="icon-show-style pointer-events-none w-8 h-8   justify-center ">
                <img src={ChangeIcon} alt="" className="w-[25px] h-[25px]" />
              </div>
              <input
                {...register("profile_pic", {
                  validate: () => {

                    return true;

                  },
                })}
                ref={refProfile}
                className="hidden absolute z-10"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setProfilePhotoFiles(e.target.files);
                }}
                type="file"
                name="pic"
                width={"100px"}
                accept="image/*"
              />
            </div>
          </div>

          <div className="flex flex-col ">
            <p className="font-semibold text-[24px]">{userSession.username}</p>
            <SelectCountryComponent
              setCountry={setCountry}
              country={country}
            ></SelectCountryComponent>
          </div>
        </div>
        {errors.profile_pic && (
          <div className="mt-2 flex">
            <span className="body2 text-[#E33A3A]">
              {errors.profile_pic.message}
            </span>
          </div>
        )}
        <div className="flex flex-col gap-y-[15px]">
          <div className=" flex flex-col items-left ">
            <label
              htmlFor="email"
              className="relative text-gray-400 focus-within:text-gray-600 block"
            >
              <WhiteMailIconComponent></WhiteMailIconComponent>
              <input
                value={userSession.email}
                type="email"
                placeholder="Email"
                className="card_input"
                disabled />
            </label>
            {errors.email && (
              <div className="mt-2 flex">
                <span className="body2 text-[#E33A3A]">
                  Es necesario este campo
                </span>
              </div>
            )}
          </div>

          <div className=" flex flex-col items-left ">
            <label
              htmlFor="text"
              className="relative text-gray-400 focus-within:text-gray-600 block"
            >
              <NumberIconComponentV2></NumberIconComponentV2>
              <input
                {...register("number", {
                  required: false,
                  minLength: 1,
                  maxLength: 15,
                })}
                defaultValue={previousInfo.contact_number}
                type="tel"
                placeholder="Number"
                className="card_input"
              />
            </label>
          </div>
          <div className=" flex flex-col items-left ">
            <label
              htmlFor="text"
              className="relative text-gray-400 focus-within:text-gray-600 block"
            >
              <WebsiteIconComponentV2></WebsiteIconComponentV2>
              <input
                {...register("website", {
                  required: false,
                  maxLength: 25,
                })}
                type="url"
                defaultValue={previousInfo.website_url}
                placeholder="http://my.website.com"
                className="card_input"
              />
            </label>
          </div>
        </div>

        <div>
          <div className="flex flex-row items-center ">
            <img src={previewBackground} alt="" className="w-[130px] h-[130px]" />
            <p className="text-[#3B3B3B] text-[16px] md:text-[16px] font-semibold leading-space">
              Background Profile
            </p>

            <img
              src={AddBGImage}
              alt=""
              className="w-[60px] h-[49px] cursor-pointer hover:shadow-inner hover:bg-[gray]"
              onClick={() => {
                if (refBackground) {
                  refBackground.current?.click();
                }
              }}
            />

            <input
              {...register("background_pic", {
                validate: () => {

                  return true;

                },
              })}
              ref={refBackground}
              className="hidden"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setBackgroundPhotoFiles(e.target.files);
              }}
              type="file"
              name="pic"
              accept="image/*"
            />
            {errors.background_pic && (
              <div className="mt-2 flex">
                <span className="body2 text-[#E33A3A]">
                  {errors.background_pic.message}
                </span>
              </div>
            )}
          </div>
          <div>
            <div className=" flex flex-col items-left pb-[15px]">
              <textarea
                placeholder="Profile Description"

                {...register("profile_desc", {
                  required: false,
                  maxLength: 100,
                })}
                defaultValue={previousInfo.profile_description}
                className="h-[188px] w-[471px] dark:p-[15px] dark:text-[black] focus-visible:text-[black] rounded-[15px]  w-full focus:text-[black] text-[black] 
             bg-white rounded  focus:ring-blue-500 focus:border-red-500 dark:focus:ring-blue-500
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 
             dark:focus:border-blue-500 
            "
              />
            </div>
          </div>
          <Button
            styleButton="mt-[43px] mb-[43px] md:mb-[0px]  w-[242px] h-[57px]  rounded-[15px] border-none drop-shadow-3xl items-center sm:mt-0 border-[#9E9C9C] focus:outline-none hover:bg-[#E4C210] bg-[#ECD24A]"
            styleText="text-[#242424] text-[20px] px-[13px] "
            onClick={() => {
              //navigate("/explore");
            }}
          >
            Update Profile
          </Button>
        </div>
      </form>
      <Footer />
    </div>
  );
};
export default ProfilePage;
