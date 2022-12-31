import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import Cookies from 'js-cookie'
import { setContext } from "@apollo/client/link/context";
console.log(import.meta.env.VITE_API_URL)

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_URL,
});

const authLink = setContext((_, { headers }) => {
  const cookie = Cookies.get("accessToken");
  const token = cookie ? cookie : import.meta.env.VITE_API_KEY;
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

export const client = new ApolloClient({
  ssrMode: true,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
