import { InMemoryCache } from "apollo-cache-inmemory";

export default function (context) {
  return {
    httpLinkOptions: {
      uri: "https://my-todos-gateway-gql.herokuapp.com/graphql",
    },
    cache: new InMemoryCache(),
    wsEndpoint: "ws://my-todos-gateway-gql.herokuapp.com/graphql",
  };
}
