import { useEffect, useState } from "react";
import axios from "axios";

export default function useBookSearch(query: any, pageNumber: any) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel: any;
    axios({
      method: "GET",
      url: "https://raw.githubusercontent.com/JMJHOX/lookmyart/development/src/mocks/images.json",
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setImages((prevImages): any => {
          return [
            ...new Set([
              ...prevImages,
              res.data.site_images.map((b: any) => {
                return b.img_url;
              }),
            ]),
          ];
        });
        setHasMore(res.data.site_images.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, images, hasMore };
}
