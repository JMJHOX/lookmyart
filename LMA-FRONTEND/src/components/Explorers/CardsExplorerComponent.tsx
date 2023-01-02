import React from "react";
import ImgTest from "./../../assets/pexel.jpg";
import ImageTest3 from "./../../assets/image3.jpg";

const CardsExplorer = () => {
  return (
    <div className="pl-[10px] ">
      <div className="flex flex-row p-[10px]  gap-x-[50px]">
        <img
          src={ImgTest}
          className="rounded-[10px] w-[280px] h-[190px]"
          width="280px"
          height="190px"
        />
        <img
          src={ImageTest3}
          className="rounded-[10px] w-[486px] h-[190px]"
          width="486px"
          height="190px"
        />
        <img
          src={ImgTest}
          className="rounded-[10px] w-[380px] h-[190px]"
          width="486px"
          height="190px"
        />
      </div>
      <div className="flex flex-row p-[10px]  gap-x-[50px]">
        <img
          src={ImageTest3}
          className="rounded-[10px] w-[486px] h-[190px]"
          width="486px"
          height="190px"
        />
        <img
          src={ImgTest}
          className="rounded-[10px] w-[280px] h-[190px]"
          width="280px"
          height="190px"
        />

        <img
          src={ImgTest}
          className="rounded-[10px] w-[380px] h-[190px]"
          width="486px"
          height="190px"
        />
      </div>
      <div className="flex flex-row p-[10px]  gap-x-[50px]">
        <img
          src={ImgTest}
          className="rounded-[10px] w-[380px] h-[190px]"
          width="486px"
          height="190px"
        />{" "}
        <img
          src={ImgTest}
          className="rounded-[10px] w-[280px] h-[190px]"
          width="280px"
          height="190px"
        />
        <img
          src={ImageTest3}
          className="rounded-[10px] w-[486px] h-[190px]"
          width="486px"
          height="190px"
        />
      </div>
      <div className="flex flex-row p-[10px]  gap-x-[50px]">
        <img
          src={ImgTest}
          className="rounded-[10px] w-[280px] h-[190px]"
          width="280px"
          height="190px"
        />
        <img
          src={ImgTest}
          className="rounded-[10px] w-[280px] h-[190px]"
          width="280px"
          height="190px"
        />
        <img
          src={ImgTest}
          className="rounded-[10px] w-[280px] h-[190px]"
          width="280px"
          height="190px"
        />
        <img
          src={ImgTest}
          className="rounded-[10px] w-[280px] h-[190px]"
          width="280px"
          height="190px"
        />
      </div>
      <div className="flex flex-row p-[10px]  gap-x-[50px]">
        <img
          src={ImgTest}
          className="rounded-[10px] w-[380px] h-[190px]"
          width="486px"
          height="190px"
        />
        <img
          src={ImgTest}
          className="rounded-[10px] w-[380px] h-[190px]"
          width="486px"
          height="190px"
        />
        <img
          src={ImgTest}
          className="rounded-[10px] w-[380px] h-[190px]"
          width="486px"
          height="190px"
        />
      </div>
      <div className="flex flex-row p-[10px]  gap-x-[50px]">
        <img
          src={ImageTest3}
          className="rounded-[10px] w-[486px] h-[190px]"
          width="486px"
          height="190px"
        />
        <img
          src={ImageTest3}
          className="rounded-[10px] w-[486px] h-[190px]"
          width="486px"
          height="190px"
        />
        <img
          src={ImgTest}
          className="rounded-[10px] w-[280px] h-[190px]"
          width="280px"
          height="190px"
        />
      </div>
    </div>
  );
};

type Props = {
  image?: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
};

const ExplorerCardSmall = ({ onClick, image }: Props) => {
  return (
    <img
      src={image ? image : ImgTest}
      className="rounded-[10px] w-[280px] h-[190px]"
      width="280px"
      height="190px"
      onClick={onClick}
    />
  );
};
const ExplorerCardMedium = () => {
  return (
    <img
      src={ImgTest}
      className="rounded-[10px] w-[380px] h-[190px]"
      width="486px"
      height="190px"
    />
  );
};
const ExplorerCardBig = () => {
  return (
    <img
      src={ImageTest3}
      className="rounded-[10px] w-[486px] h-[190px]"
      width="486px"
      height="190px"
    />
  );
};
interface ImageSource {
  img_src: string;
}
const ExplorerCardSmallTest = ({ img_src }: ImageSource) => {
  return (
    <img
      src={img_src}
      className="rounded-[10px] w-[280px] h-[190px]"
      width="280px"
      height="190px"
    />
  );
};
const ExplorerCardMediumTest = ({ img_src }: ImageSource) => {
  return (
    <img
      src={img_src}
      className="rounded-[10px] w-[380px] h-[190px]"
      width="486px"
      height="190px"
    />
  );
};
const ExplorerCardBigTest = ({ img_src }: ImageSource) => {
  return (
    <img
      src={img_src}
      className="rounded-[10px] w-[486px] h-[190px]"
      width="486px"
      height="190px"
    />
  );
};

interface ExplorerRow {
  data: string[];
}
const ExplorerRowFirst = (values: ExplorerRow | null) => {
  console.log("hey", values);
  return (
    <div className="flex flex-row p-[10px]  gap-x-[50px]">
      {values?.data.length == 3 && (
        <>
          <ExplorerCardSmallTest img_src={values.data[0][0]} />
          <ExplorerCardBigTest img_src={values.data[1][0]} />
          <ExplorerCardMediumTest img_src={values.data[2][0]} />
        </>
      )}
    </div>
  );
};
const ExplorerRowTwo = (values: ExplorerRow | null) => {
  console.log("hey", values);
  return (
    <div className="flex flex-row p-[10px]  gap-x-[50px]">
      {values?.data.length == 3 && (
        <>
          <ExplorerCardBigTest img_src={values.data[1][0]} />
          <ExplorerCardSmallTest img_src={values.data[0][0]} />
          <ExplorerCardMediumTest img_src={values.data[2][0]} />
        </>
      )}
    </div>
  );
};
const ExplorerRowThree = (values: ExplorerRow | null) => {
  console.log("hey", values);
  return (
    <div className="flex flex-row p-[10px]  gap-x-[50px]">
      {values?.data.length == 3 && (
        <>
          <ExplorerCardMediumTest img_src={values.data[2][0]} />

          <ExplorerCardSmallTest img_src={values.data[0][0]} />
          <ExplorerCardBigTest img_src={values.data[1][0]} />
        </>
      )}
    </div>
  );
};
const ExplorerRowFour = (values: ExplorerRow | null) => {
  console.log("hey", values);
  return (
    <div className="flex flex-row p-[10px]  gap-x-[50px]">
      {values?.data.length == 3 && (
        <>
          <ExplorerCardSmallTest img_src={values.data[0][0]} />
          <ExplorerCardSmallTest img_src={values.data[0][0]} />
          <ExplorerCardSmallTest img_src={values.data[0][0]} />
          <ExplorerCardSmallTest img_src={values.data[0][0]} />
        </>
      )}
    </div>
  );
};
const ExplorerRowFive = (values: ExplorerRow | null) => {
  console.log("hey", values);
  return (
    <div className="flex flex-row p-[10px]  gap-x-[50px]">
      {values?.data.length == 3 && (
        <>
          <ExplorerCardMediumTest img_src={values.data[2][0]} />
          <ExplorerCardMediumTest img_src={values.data[2][0]} />
          <ExplorerCardMediumTest img_src={values.data[2][0]} />
        </>
      )}
    </div>
  );
};
export {
  CardsExplorer,
  ExplorerCardSmall,
  ExplorerCardMedium,
  ExplorerCardBig,
  ExplorerRowFirst,
  ExplorerCardSmallTest,
  ExplorerRowTwo,
  ExplorerRowThree,
  ExplorerRowFour,
  ExplorerRowFive,
};
