import "antd/dist/antd.css";
// import "../styles/globals.css"; //모든페이지에전체적으로적용하고싶은css 나중에 emotion으로 바꿀거야
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

function MyApp({ Component, pageProps }) {
  //모든세팅자리
  const client = new ApolloClient({
    //새것을 하나 만들겠다.
    //기능설정내용
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    //아폴로기능을 제공
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
