import { GraphQLClient } from "graphql-request";

const gqlClient = new GraphQLClient(String(process.env.GQL_ENDPOINT), {
  headers: { authorization: `Bearer ${process.env.GQL_TOKEN}` }
});
export default gqlClient;
