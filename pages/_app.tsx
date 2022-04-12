// import "../styles/globals.css"; //모든페이지에전체적으로적용하고싶은css 나중에 emotion으로 바꿀거야
import "antd/dist/antd.css";

import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";

import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
