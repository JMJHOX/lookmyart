import React from "react";
import ImgTest from "./../assets/pexel.jpg";
import ImageTest3 from "./../assets/image3.jpg";

type Props = {

};

function ExplorePaginator({}: Props) {
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
}

export { ExplorePaginator };
