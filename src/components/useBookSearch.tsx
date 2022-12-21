import { useEffect, useState } from "react";
import axios from "axios";

function useBookSearch(query: any, pageNumber: any) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel: any;
    axios({
      method: "GET",
      url: "https://picsum.photos/200",
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setBooks((prevBooks): any => {
          console.log(prevBooks);
          return [...new Set([...prevBooks, { Link: `${res} ` }])];
        });
        setHasMore(res.data.docs.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, books, hasMore };
}
export default useBookSearch;
