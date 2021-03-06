import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;
export const getAccessToken = async (setAccessToken: any) => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend02.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
};
