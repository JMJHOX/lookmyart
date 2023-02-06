import { Button } from "./Buttons/ButtonComponent";
import UploadIcon from "./../assets/Upload.svg";
import { useRef, useState } from "react";
import { SUBMIT_IMAGE } from "../queries/Submit/submit_image";
import { useMutation } from "@apollo/client";
import { SUBMIT_ART } from "../queries/Submit/submit_forms";
import { useSelector } from "react-redux";
import { RootState } from "../services/apollo/store/store";

import { SubmitHandler, useForm } from "react-hook-form";
import { IArtFormValues } from "../interfaces/arts";
import { useNavigate } from "react-router-dom";

const SubmitComponent = () => {
  const [UserUploadImage] = useMutation(SUBMIT_IMAGE);
  const [userUploadArt] = useMutation(SUBMIT_ART);
  const userId = useSelector((state: RootState) => state.stateAuth.sessionUser.uuid);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IArtFormValues>();
  const [files, setFiles] = useState<FileList | null>(null);
  const ref = useRef<HTMLInputElement | null>(null);

  const SubmitProcess: SubmitHandler<IArtFormValues> = async (formValues) => {
    try {
      if (files && files != null) {
        const uploadResult = await UserUploadImage({
          variables: { FormData: files[0] },
        });
        const imageId = uploadResult.data.upload.data.id;

        console.log(userId);

        await userUploadArt({
          variables: {
            ImageId: imageId,
            author_id: userId,
            art_name: formValues.art_name,
            art_bio: formValues.description,
          },
        });
        navigate("/explore");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-row justify-center  items-center ">
      <form
        onSubmit={handleSubmit(SubmitProcess)}
        className=" flex flex-col p-[10px] gap-y-[10px] rounded-[15px] px-[100px] p-[50px] border-solid border-2 border-black"
      >
        <Button
          styleButton="mt-0   w-[99px] h-[47px]  py-[2px] px-[5px] rounded-[17px]  bg-[#03CD82] "
          styleText=" flex justify-center text-[#000000]"
          onClick={() => {
            if (ref) {
              ref.current?.click();
            }
          }}
        >
          <img className="w-[25px] h-[25px]" src={UploadIcon} alt="Your SVG" />
          Upload
        </Button>
        <input
          {...register("image", {
            validate: () => {
              if (files) {
                return true;
              }
              return "Image is required";
            },
          })}
          ref={ref}
          type="file"
          id="input_file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFiles(e.target.files);
          }}
          accept=".jpg,.jpeg,.png"
          style={{ display: "none" }}
        />
        {errors.image && (
          <div className="mt-2 flex">
            <span className="body2 text-[#E33A3A]">{errors.image.message}</span>
          </div>
        )}

        <div className=" flex flex-col items-left">
          <input
            type="text"
            placeholder="Art Name"
            {...register("art_name", {
              required: true,
              minLength: 1,
              maxLength: 15,
            })}
            className="border border-solid border-[#3B3B3B3D] rounded-[15px] dark:bg-white-700   h-[57px] w-[276px] dark:p-[15px] dark:text-[#636363]"
          />
          {errors.art_name && (
            <div className="mt-2 flex">
              <span className="body2 text-[#E33A3A]">
                Es necesario este campo
              </span>
            </div>
          )}
        </div>
        <div className=" flex flex-col items-left">
          <textarea
            {...register("description", {
              validate: (text) => {
                if (text) {
                  if (text.length >= 75) {
                    console.log(text.length);
                    return "Limit is 75 characters";
                  }

                  return true;
                }
                return "Field is required";
              },
            })}
            placeholder="Description"
            className="h-[188px] w-[471px] dark:p-[15px] dark:text-[black]  rounded-[15px]  w-full focus:text-[black] text-[black] 
             bg-white rounded  focus:ring-blue-500 focus:border-red-500 dark:focus:ring-blue-500
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
             dark:focus:border-blue-500
            "
          />

          {errors.description && (
            <div className="mt-2 flex">
              <span className="body2 text-[#E33A3A]">
                {errors.description.message}
              </span>
            </div>
          )}
        </div>
        <Button
          styleButton="mt-[43px] w-[242px] h-[50px] md:w-[242px] md:h-[57px]  rounded-[15px] border-none drop-shadow-3xl items-center sm:mt-0 border-[#9E9C9C] bg-[#6CB2FE]"
          styleText="text-[20px] px-[13px] text-[#242424]"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
export default SubmitComponent;
