// import "../styles/globals.css"; //모든페이지에전체적으로적용하고싶은css 나중에 emotion으로 바꿀거야
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { ApolloLink } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  //세팅 함수 부분
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
