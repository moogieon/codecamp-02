import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { createUploadLink } from "apollo-upload-client";
import { AppProps } from "next/app";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useEffect,
} from "react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
import * as Sentry from "@sentry/nextjs";
import "../styles/globalstyle.css";
import Head from "next/head";
Sentry.init({
  dsn: "https://6a59c03af1674c2e8b8bd092141bce41@o965495.ingest.sentry.io/5916340",
});

interface IContext {
  accessToken?: any;
  setAccessToken?: Dispatch<SetStateAction<undefined>>;
  userInfo?: any;
  setUserInfo?: Dispatch<SetStateAction<{}>>;
}

export const GlobalContext = createContext<IContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState({});
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };
  useEffect(() => {
    if (localStorage.getItem("refreshToken")) {
      getAccessToken(setAccessToken);
      setUserInfo(
        JSON.parse(localStorage.getItem("userInfo" || "{}") as string)
      );
    }
  }, []);
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // 1. refreshToken 으로 새로운 accessToken 발급받기

          // 2. 발급 받은 accessToken 으로 방금 실패한 쿼리 재실행하기
          operation.setContext({
            headrs: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });
  const uploadLink = createUploadLink({
    // uri: "https://backend02.codebootcamp.co.kr/graphql11",
    uri: "https://backend08.codebootcamp.co.kr/graphql22",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });
  const client = new ApolloClient({
    // uri: "http://backend02.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <GlobalContext.Provider value={value}>
      <Head>
        <title>내가 찾던 앨범, shop</title>
        <link rel="shortcut icon" href="/favi/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favi/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favi/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favi/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favi/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favi/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favi/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favi/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favi/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favi/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favi/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favi/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favi/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favi/favicon-16x16.png"
        />
        <link rel="manifest" href="/favi/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favi/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <ApolloProvider client={client}>
        <Layout>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
