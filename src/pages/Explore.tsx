import { Button } from "../components/Button";
import ExploreBar from "../components/ExploreBar";
import Footer from "../components/footer";
import Navbar from "../components/Navbar/navbar";
import SearchLook from "./../assets/search.svg";
import { ExplorePaginator } from "../components/ExplorePaginator";
import React, { useState, useRef, useCallback } from "react";
import useBookSearch from "../components/useBookSearch";

const ExplorePage = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);

  const observer = useRef<IntersectionObserver | null>();
  const lastBookElementRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  //function handleSearch(e: any) {
  //  setQuery(e.target.value);
  //  setPageNumber(1);
  //}
  return (
    <div className="w-full h-full bg-[#B6D9FF]">
      <Navbar />
      <div className="w-full flex flex-col items-center justify-stretch  py-[75px] ">
        <div className="flex flex-row justify-center">
          <input
            type="text"
            className=" w-[890px] h-[43px] rounded-[25px] rounded-r-[0px] pl-[25px] outline-none text-black"
            placeholder="Search art"
          />
          <Button
            styleButton="mt-[43px] sm:mt-0 w-[106px] h-[43px]  py-[2px] px-[5px] rounded-[25px] rounded-l-[0px] bg-[#6CB2FE] grow-[2]"
            styleText=" flex justify-center"
            onClick={() => {}}
          >
            <img
              className="w-[30px] h-[30px]"
              src={SearchLook}
              alt="Your SVG"
            />
          </Button>
        </div>
      </div>
      <div className="flex flex-col pl-[150px]  bg-[#B6D9FF] ">
        <ExploreBar />

        {books.map((book, index) => {
          if (books.length === index + 1) {
            return (
              <div ref={lastBookElementRef} key={book}>
                s<ExplorePaginator />
              </div>
            );
          } else {
            return (
              <div key={book}>
                a<ExplorePaginator />
              </div>
            );
          }
        })}
        <div>{loading && "Loading..."}</div>
        <div>{error && "Error"}</div>
      </div>
      <Footer />
    </div>
  );
};
export default ExplorePage;
