import Navbar from "../components/Navbar/NavBarComponent";
import { useSelector } from "react-redux";
import { RootState } from "../services/apollo/store/store";
import LockIconComponent from "../components/Icons/LockIconComponent";
import { Button } from "../components/Buttons/ButtonComponent";
import UserProfile from "./../assets/profiles/ProfileBlack.svg";
import ChangeIcon from "./../assets/icons/change-email-icon.svg";
import AddBGImage from "./../assets/icons/add-image-bg-icon.svg";
import WhiteMailIconComponent from "../components/Icons/WhiteMailIconComponent";
import NumberIconComponentV2 from "../components/Icons/NumberIconComponentV2";
import WebsiteIconComponentV2 from "../components/Icons/WebsiteIconComponentV2";
import Footer from "../components/FooterComponent";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SelectCountryComponent } from "../components/Selectors/SelectCountryComponent";
import { IProfileFormValues } from "../interfaces/profile";
const ProfilePage = () => {
  const userName: string = useSelector((state: RootState) => {
    return state.stateAuth.username;
  });
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
  const [country, setCountry] = useState("PA");
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
      if (profilePhotoFiles && profilePhotoFiles != null) {
      }
    } catch (e) {
      console.log(e);
    }
  };

  const refProfile = useRef<HTMLInputElement | null>(null);
  const refBackground = useRef<HTMLInputElement | null>(null);
  return (
    <div className="w-full h-full   bg-background ">
      <Navbar />

      <form
        onSubmit={handleSubmit(SubmitProcess)}
        className="flex flex-col items-center md:items-stretch md:pl-[150px] text-black bg-background"
      >
        <div
          id="profile_information"
          className="flex flex-row gap-x-[10px] items-center pb-[15px]"
        >
          <div className="relative">
            <img
              src={UserProfile}
              onClick={() => {}}
              alt=""
              className="w-[130px] h-[130px]  "
            />
            <div
              className="absolute bottom-[15px] right-[5px] bg-[#D8E5EA] w-[31px]   rounded-full  hover:bg-[gray] hover:text-[blue] cursor-pointer  "
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
                    if (profilePhotoFiles) {
                      return true;
                    }
                    return "Image is required";
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
            <p className="font-semibold text-[24px]">{userName}</p>
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
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                type="email"
                placeholder="Email"
                className="card_input"
              />
            </label>
            {errors.email && (
              <div className="mt-2 flex">
                <span className="body2 text-[#E33A3A]">
                  Es necesario este campo
                </span>
              </div>
            )}
          </div>
          <div className=" flex flex-col items-left">
            <label
              htmlFor="password"
              className="relative text-gray-400 focus-within:text-gray-600 block"
            >
              <LockIconComponent></LockIconComponent>
              <input
                type="password"
                placeholder="Password"
                className="card_input"
                {...register("password", {
                  required: true,
                  minLength: 1,
                  maxLength: 15,
                })}
              />
            </label>
          </div>
          <div className=" flex flex-col items-left ">
            <label
              htmlFor="text"
              className="relative text-gray-400 focus-within:text-gray-600 block"
            >
              <NumberIconComponentV2></NumberIconComponentV2>
              <input
                {...register("number", {
                  required: true,
                  minLength: 1,
                  maxLength: 15,
                })}
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
                  required: true,
                  minLength: 1,
                  maxLength: 15,
                })}
                type="text"
                placeholder="Website"
                className="card_input"
              />
            </label>
          </div>
        </div>

        <div>
          <div className="flex flex-row items-center ">
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
                  if (BackgroundPhotoFiles) {
                    return true;
                  }
                  return "Image is required";
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
            <div className=" flex flex-col items-left">
              <textarea
                placeholder="Profile Description"
                className="h-[188px] w-[471px] dark:p-[15px] dark:text-[black]  rounded-[15px]  w-full focus:text-[black] text-[black] 
             bg-white rounded  focus:ring-blue-500 focus:border-red-500 dark:focus:ring-blue-500
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
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
