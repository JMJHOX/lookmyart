import { useCallback, useRef, useState } from "react";
import ImgTest from "./../assets/pexel.jpg";
import ImageTest3 from "./../assets/image3.jpg";
import useImageSearch from "./useImageSearch";

type Props = {};

function ExplorePaginator({}: Props) {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { images, hasMore, loading, error } = useImageSearch(query, pageNumber);

  const observer = useRef<IntersectionObserver | null>();
  //setQuery(e.target.value);
  //setPageNumber(1);
  const lastImageElementRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) {
        console.log(node);
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );
  return (
    <div>
      {images.map((image: any, index: any) => {
        return (
          <div className="pl-[10px] " ref={lastImageElementRef} key={image}>
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
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </div>
  );
}

export { ExplorePaginator };
