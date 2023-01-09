import { useEffect, useRef, useState } from "react";
import ListingPageComponent from "./ListingComponent";
import { useLazyQuery, useQuery } from "@apollo/client";
import { PAGINATOR_ART } from "../../queries/explore/PaginatorArts";

type Props = {};

function ExplorePaginator({}: Props) {
  const listInnerRef = useRef<HTMLDivElement | null>();
  const [currPage, setCurrPage] = useState(1); // storing current page number
  const [prevPage, setPrevPage] = useState(0); // storing prev page number
  const [userList, setUserList] = useState<any[]>([]); // storing list
  const [wasLastList, setWasLastList] = useState(false); // setting a flag to know the last list
  const [loadingScreen, setLoadingScreen] = useState(false); // setting a flag to know the last list
  const [failedScreen, setFailedScreen] = useState(false); // setting a flag to know the last list
  const [getPagination] = useLazyQuery(PAGINATOR_ART);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingScreen(true);
      const response = await getPagination({
        variables: { pageSize: 10, PageNumber: currPage },
      });
      if (response.error) {
        setFailedScreen(true);
        setLoadingScreen(false);
      }

      if (!response.data.arts.data.length) {
        setWasLastList(true);
        setLoadingScreen(false);
        return;
      }
      setPrevPage(currPage);
      setUserList([...userList, ...response.data.arts.data]);
      console.log(userList);
      setLoadingScreen(false);
    };
    if (!wasLastList && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, wasLastList, prevPage, userList]);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      const bottom =
        Math.trunc(scrollHeight) - Math.trunc(scrollTop) == clientHeight;

      if (bottom) {
        const counter = currPage + 1;
        setCurrPage(counter);
      }
    }
  };

  return (
    <div className=" ">
      <ListingPageComponent
        onScroll={onScroll}
        listInnerRef={listInnerRef}
        userList={userList}
        isLoading={loadingScreen}
      />
    </div>
  );
}

export { ExplorePaginator };
