import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ListingPageComponent from "./ListingComponent";

type Props = {};

function ExplorePaginator({}: Props) {
  const listInnerRef = useRef<HTMLDivElement | null>();
  const [currPage, setCurrPage] = useState(1); // storing current page number
  const [prevPage, setPrevPage] = useState(0); // storing prev page number
  const [userList, setUserList] = useState([{}]); // storing list
  const [wasLastList, setWasLastList] = useState(false); // setting a flag to know the last list

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

      const sum = Math.trunc(scrollTop + clientHeight);
      console.log(sum, scrollHeight);
      if (sum == (scrollHeight - 1 || scrollHeight + 1 || scrollHeight)) {
        const counter = currPage + 1;
        setCurrPage(counter);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${currPage}&size=20`
      );
      if (!response.data.data.length) {
        setWasLastList(true);
        return;
      }
      setPrevPage(currPage);
      setUserList([...userList, ...response.data.data]);
      console.log(userList);
    };
    if (!wasLastList && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, wasLastList, prevPage, userList]);

  return (
    <div className="pl-[25px] ">
      <ListingPageComponent
        onScroll={onScroll}
        listInnerRef={listInnerRef}
        userList={userList}
      />
    </div>
  );
}

export { ExplorePaginator };
