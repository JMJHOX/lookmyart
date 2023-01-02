import { Button } from "./Button";
import UserProfile from "./../assets/ProfileWhite.svg";
import UploadIcon from "./../assets/Upload.svg";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import axios from "axios";
import { SUBMIT_IMAGE } from "../queries/Submit/submit_image";
import { useMutation } from "@apollo/client";

const SubmitComponent = () => {
  const [UserUploadImage] = useMutation(SUBMIT_IMAGE);
  const [files, setFiles] = useState<FileList | null>(null);
  const ref = useRef<HTMLInputElement | null>(null);

  const fetchData = async () => {
    const formData = new FormData();

    if (files && files != null) {
      formData.append("files", files[0]);
      console.log(files[0]);
      const uploadResult = await UserUploadImage({
        variables: { FormData: files[0] },
      });
      console.log(uploadResult);
    }
  };
  useEffect(() => {
    fetchData();
  }, [files]);

  return (
    <div className="  flex w-full  flex-col  ">
      <div className="flex flex-row justify-center  items-center p-[10px] gap-x-[10px] ">
        <img src={UserProfile} alt="" className="w-[45px] h-[45px] " />
        <Button
          styleButton="mt-0   w-[99px] h-[47px]  py-[2px] px-[5px] rounded-[17px]  bg-[#71F676] "
          styleText=" flex justify-center"
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
          ref={ref}
          type="file"
          id="input_file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFiles(e.target.files);
          }}
          accept=".jpg,.jpeg,.png"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};
export default SubmitComponent;
