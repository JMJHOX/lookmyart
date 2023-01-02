import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import Cookies from "js-cookie";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";

const authLink = setContext((_, { headers }) => {
  new HttpLink({
    uri: import.meta.env.VITE_API_URL,
  });
  const cookie = Cookies.get("accessToken");
  const token = cookie ? cookie : import.meta.env.VITE_API_KEY;
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});
const uploadLink = createUploadLink({ uri: import.meta.env.VITE_API_URL });
export const client = new ApolloClient({
  ssrMode: true,
  link: ApolloLink.from([authLink, uploadLink]),
  cache: new InMemoryCache(),
});
